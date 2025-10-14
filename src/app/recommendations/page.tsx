import Navbar from '@/components/navbar'
import Recommendations from '@/components/recommendations'
import Footer from '@/components/footer'

export default function RecommendationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Recommendations />
      <Footer />
    </main>
  )
}
