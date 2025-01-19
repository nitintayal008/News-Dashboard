import { signIn, useSession } from 'next-auth/react'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {!session ? (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  News Payout Dashboard
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  Track your articles, manage payouts, and analyze your content performance
                  all in one place.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => signIn('google')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out shadow-sm"
                >
                  Sign In with Google
                </button>
                <p className="text-sm text-gray-500">
                  Securely sign in to access your dashboard
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
                {[
                  {
                    title: 'Track Articles',
                    description: 'Monitor all your published content in real-time'
                  },
                  {
                    title: 'Manage Payouts',
                    description: 'Keep track of your earnings and payment history'
                  },
                  {
                    title: 'Analytics',
                    description: 'Get insights into your content performance'
                  }
                ].map((feature) => (
                  <div key={feature.title} className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Welcome back, {session.user?.name}!
                </h1>
                <p className="text-xl text-gray-600">
                  Ready to check your latest content performance?
                </p>
              </div>

              <div className="space-y-6">
                <Link href="/dashboard" legacyBehavior>
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out shadow-sm">
                    Go to Dashboard
                  </a>
                </Link>
                
                <Link href="/payout" legacyBehavior> 
                  <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out shadow-sm">
                    View Payouts
                  </a>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">Quick Access</h3>
                    <p className="text-sm text-gray-600">View your analytics and reports</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">Content Management</h3>
                    <p className="text-sm text-gray-600">Manage your articles and payouts</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}