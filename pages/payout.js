import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'


export default function PayoutPage() {
  const { data: session, status } = useSession()
  const { articles } = useSelector((state) => state.news)
  const [selectedMonth, setSelectedMonth] = useState('')



  if (status === 'loading') {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      </Layout>
    )
  }

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
          <p className="text-gray-600">Please sign in to view payout details</p>
        </div>
      </Layout>
    )
  }

  const payoutsByMonth = articles.reduce((acc, article) => {
    const date = new Date(article.publishedAt)
    const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`

    if (!acc[monthYear]) {
      acc[monthYear] = {
        articles: [],
        totalAmount: 0
      }
    }

    acc[monthYear].articles.push(article)
    acc[monthYear].totalAmount += 10
    return acc
  }, {})

  const months = Object.keys(payoutsByMonth)

  return (
    <Layout>
      <Link href="/dashboard" legacyBehavior>
        <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out shadow-sm">
          Go to Dashboard
        </a>
      </Link>
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Payout Details</h1>
          <p className="text-gray-600">View and manage your article payouts</p>
        </div>

        <div className="mb-6">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded px-4 py-2 bg-white"
          >
            <option value="">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-gray-500 text-sm uppercase">Total Articles</h3>
            <p className="text-2xl font-bold">
              {articles.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-gray-500 text-sm uppercase">Total Earnings</h3>
            <p className="text-2xl font-bold text-green-600">
              ${articles.length * 10}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-gray-500 text-sm uppercase">Average per Month</h3>
            <p className="text-2xl font-bold">
              ${((articles.length * 10) / Math.max(months.length, 1)).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Articles</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(payoutsByMonth)
                  .filter(([month]) => !selectedMonth || month === selectedMonth)
                  .map(([month, data]) => (
                    <tr key={month} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.articles.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${data.totalAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Paid
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Article Details</h2>
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {articles.map((article, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {article.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {article.author || 'Unknown'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        $10
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}