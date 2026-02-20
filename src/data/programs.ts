import { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'p3',
    emoji: '🔥',
    title: 'Reset Kebiasaan 30 Hari',
    description: 'Bangun ulang rutinitas Anda dari awal dengan tindakan terpandu setiap hari.',
    longDescription: 'Sempurna untuk pemula, program ini membantu Anda membangun rutinitas kebugaran yang konsisten dengan latihan-latihan dasar. Tujuannya bukan intensitas, melainkan konsistensi, membantu Anda menciptakan fondasi yang kuat untuk gaya hidup yang lebih sehat dan aktif.',
    category: 'Kesehatan',
    duration: '30 Hari',
    image: 'https://picsum.photos/seed/fitness-foundation/600/400',
    habits: [
      { name: 'Jalan kaki atau jogging selama 20 menit' },
      { name: '10 kali push-up' },
      { name: 'Plank selama 30 detik' },
    ],
  },
  {
    id: 'p2',
    emoji: '🧠',
    title: 'Blueprint Fokus & Disiplin',
    description: 'Latih otot konsistensi Anda hanya dalam 15 menit sehari.',
    longDescription: 'Di dunia yang penuh dengan notifikasi, program ini dirancang untuk membantu Anda melepaskan diri dari gangguan digital. Dengan menetapkan batasan pada perangkat Anda, Anda dapat meningkatkan kualitas tidur, memperpanjang rentang perhatian, dan lebih hadir dalam kehidupan sehari-hari.',
    category: 'Produktivitas',
    duration: '14 Hari',
    image: 'https://picsum.photos/seed/digital-detox/600/400',
    habits: [
      { name: 'Tidak menggunakan ponsel 1 jam sebelum tidur' },
      { name: 'Membaca buku fisik selama 15 menit' },
      { name: 'Jalan-jalan tanpa membawa ponsel' },
    ],
  },
  {
    id: 'p1',
    emoji: '🌅',
    title: 'Sistem Momentum Pagi',
    description: 'Ciptakan rutinitas pagi yang kuat dan benar-benar melekat.',
    longDescription: 'Program ini membantu Anda membangun rutinitas pagi yang tenang dan fokus. Dengan menggabungkan meditasi, rasa syukur, dan aktivitas fisik ringan, Anda dapat menciptakan suasana positif untuk sisa hari Anda, meningkatkan fokus, dan mengurangi stres.',
    category: 'Pikiran',
    duration: '7 Hari',
    image: 'https://picsum.photos/seed/mindful-morning/600/400',
    habits: [
      { name: 'Meditasi selama 5 menit' },
      { name: 'Tulis satu hal yang Anda syukuri' },
      { name: 'Peregangan selama 10 menit' },
    ],
  },
];
