import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsArticles } from '@/features/newsSlice'
import Layout from '@/components/Layout'
import DashboardCards from '@/components/DashboardCards'
import ChartComponent from '@/components/ChartComponent'
import { exportToCSV, exportToPDF, exportToGoogleSheets } from '@/utils/exportUtils'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const dispatch = useDispatch()
  const { articles, status: articleStatus } = useSelector((state) => state.news)

  const [search, setSearch] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([])
  const [dateRange, setDateRange] = useState({ start: '', end: '' })

  useEffect(() => {
    if (session?.user) {
      dispatch(getNewsArticles())
    }
  }, [dispatch, session])

  useEffect(() => {
    const result = articles.filter(article => {
      const matchesSearch = !search ||
        article.title?.toLowerCase().includes(search.toLowerCase()) ||
        article.author?.toLowerCase().includes(search.toLowerCase())

      const matchesDate = !dateRange.start || !dateRange.end || (
        new Date(article.publishedAt) >= new Date(dateRange.start) &&
        new Date(article.publishedAt) <= new Date(dateRange.end)
      )

      return matchesSearch && matchesDate
    })

    setFilteredArticles(result)
  }, [articles, search, dateRange])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500" />
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
        <p className="text-gray-600">Please sign in to view the dashboard</p>
      </div>
    )
  }

  const totalPayout = filteredArticles.length * 10
  const authorSummary = filteredArticles.reduce((acc, item) => {
    const author = item.author || 'Unknown'
    if (!acc[author]) acc[author] = 0
    acc[author] += 1
    return acc
  }, {})

  const chartData = Object.entries(authorSummary).map(([author, count]) => ({
    author,
    count,
  }))

  return (
    <Layout>
      <Link href="/payout" legacyBehavior>
        <a className="inline-flex items-center px-6 py-3 border text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out shadow-sm">
          View Payouts
        </a>
      </Link>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Content Analytics</h1>
            <p className="text-gray-500 mt-2">Track and analyze your content performance</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => exportToCSV(filteredArticles, 'articles.csv')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Export CSV
            </button>
            <button
              onClick={() => exportToPDF(filteredArticles)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Export PDF
            </button>
            <button
              onClick={() => exportToGoogleSheets(filteredArticles)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Export to Sheets
            </button>
          </div>
        </div>

        <DashboardCards
          articlesCount={filteredArticles.length}
          totalPayout={totalPayout}
          authorCount={Object.keys(authorSummary).length}
          averageArticles={(filteredArticles.length / Math.max(1, Object.keys(authorSummary).length)).toFixed(1)}
        />

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">From</span>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">To</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {articleStatus === 'loading' ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Author Distribution</h2>
              <ChartComponent data={chartData} />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Articles</h2>
              <div className="space-y-4">
                {filteredArticles.map((article, idx) => (
                  <div key={idx} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-lg">{article.title}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                      <span>By {article.author || 'Unknown'}</span>
                      <span>•</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}