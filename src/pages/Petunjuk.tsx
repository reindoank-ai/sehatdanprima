import Layout from '../components/Layout';

export default function Petunjuk() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-card text-card-foreground p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Cara Menggunakan Sehat & Prima</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">1. Memulai (Onboarding)</h2>
            <p>Saat pertama kali membuka aplikasi, klik <strong>"Try as Guest"</strong> untuk memulai. Anda akan dipandu untuk memilih tujuan dan beberapa kebiasaan awal untuk membangun fondasi rutinitas Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">2. Dashboard - Pusat Kendali Anda</h2>
            <p>Dashboard adalah tempat Anda melacak kemajuan harian. Fitur utamanya meliputi:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
              <li><strong>Menandai Kebiasaan:</strong> Cukup klik pada sebuah kebiasaan untuk menandainya sebagai selesai hari ini.</li>
              <li><strong>Streak Counter (🔥):</strong> Di samping setiap kebiasaan, ikon api menunjukkan berapa hari beruntun Anda telah menyelesaikan kebiasaan tersebut. Jaga apinya tetap menyala!</li>
              <li><strong>Ringkasan Harian:</strong> Di bagian atas, Anda dapat melihat ringkasan cepat tentang berapa banyak kebiasaan yang telah selesai dan persentase kemajuan Anda untuk hari itu.</li>
              <li><strong>Menambah Kebiasaan:</strong> Gunakan kolom input untuk menambahkan kebiasaan baru kapan saja. Semua fitur gratis, jadi tambahkan sebanyak yang Anda butuhkan!</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">3. Programs - Program Terpandu</h2>
            <p>Merasa bingung harus mulai dari mana? Halaman "Programs" berisi kumpulan kebiasaan yang dirancang oleh para ahli untuk tujuan tertentu, seperti "Mindful Morning" atau "Digital Detox".</p>
            <p className="mt-2">Pilih program yang Anda suka, klik <strong>"Start Program"</strong>, dan semua kebiasaan terkait akan otomatis ditambahkan ke dashboard Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">4. Stats - Lihat Kemajuan Anda</h2>
            <p>Halaman ini memberikan gambaran besar tentang perjalanan Anda. Anda akan menemukan:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li><strong>Grafik Kemajuan:</strong> Visualisasikan data penyelesaian kebiasaan Anda.</li>
              <li><strong>Calendar View:</strong> Lihat kalender yang menandai semua hari di mana Anda berhasil menyelesaikan kebiasaan. Ini cara yang bagus untuk melihat konsistensi Anda dari waktu ke waktu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">5. Fitur Lainnya</h2>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                <li><strong>Dark Mode:</strong> Klik ikon matahari (☀️) atau bulan (🌙) di pojok kanan atas untuk beralih antara mode terang dan gelap.</li>
                <li><strong>Account:</strong> Lihat informasi dasar akun Anda.</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
