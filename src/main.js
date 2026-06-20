import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/main.css'

const messages = {
  id: {
    nav: {
      about: 'Tentang',
      projects: 'Proyek',
      education: 'Pendidikan',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, saya',
      name: 'Khrysdyan Elga Rexsa Purba',
      role: 'Mahasiswa S1 Informatika',
      subtitle: 'Saya tertarik dalam pengembangan Frontend dan Backend, dengan fokus menciptakan pengalaman digital yang menarik, elegan, dan intuitif. Saya selalu berusaha memberikan solusi terbaik untuk setiap proyek yang saya kerjakan.',
      cta_work: 'Lihat Karya',
      cta_contact: 'Hubungi Saya',
    },
    about: {
      eyebrow: 'Tentang Saya',
      heading: 'Tertarik dengan Semua hal yang Baru',
      p1: 'Menyukai hal baru berarti sadar betul bahwa ilmu teknologi hari ini bisa saja tergantikan besok. Oleh karena itu, saya memiliki mentalitas yang fleksibel, selalu siap untuk unlearn (meninggalkan cara lama yang tidak relevan) dan relearn (mempelajari pendekatan baru) demi menciptakan kode yang lebih efisien, bersih, dan modern.',
      p2: 'Lebih dari sekadar ikut-ikutan tren (no FOMO), antusiasme terhadap hal baru ini memacu saya untuk selalu mencari solusi yang lebih cerdas. Setiap ada framework atau tools anyar yang muncul, insting saya langsung bekerja memikirkan bagaimana teknologi ini bisa menyederhanakan masalah yang rumit. Lewat proses trial and error yang tiada henti, saya sedang membangun fondasi agar kelak siap menjadi developer yang adaptif di industri.',
      skill_label: 'Keahlian',
    },
    projects: {
      eyebrow: 'Karya Pilihan',
      visit: 'Kunjungi Proyek',
      prev: 'Sebelumnya',
      next: 'Selanjutnya',
    },
    education: {
      eyebrow: 'Riwayat Pendidikan',
      heading: 'Perjalanan Akademis',
    },
    contact: {
      eyebrow: 'Kontak',
      heading: 'Mari Berkolaborasi',
      subtitle: 'Punya ide proyek? Saya siap mendengarkan dan mewujudkannya bersama Anda.',
      name_label: 'Nama Lengkap',
      email_label: 'Alamat Email',
      message_label: 'Pesan',
      name_placeholder: 'Nama Lengkap Anda',
      email_placeholder: 'nama{'@'}email.com',
      message_placeholder: 'Ceritakan proyekmu...',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: 'Pesan berhasil terkirim! Saya akan segera menghubungi Anda.',
      success_btn: 'Pesan berhasil terkirim!',
    },
    preloader: {
      loading: 'Sedang Memuat',
    },
    footer: {
      rights: 'Semua hak dilindungi.',
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Khrysdyan Elga Rexsa Purba',
      role: 'Bachelor of Informatics student',
      subtitle: 'I am passionate about both front-end and back-end development, with a focus on creating engaging, elegant, and intuitive digital experiences. I always strive to provide the best possible solution for every project I work on.',
      cta_work: 'View Work',
      cta_contact: 'Contact Me',
    },
    about: {
      eyebrow: 'About Me',
      heading: 'Interested in Everything New',
      p1: 'Being passionate about new things means being fully aware that today\'s technology may be replaced tomorrow. Therefore, I have a flexible mentality, always ready to unlearn (abandon old, irrelevant methods) and relearn (learn new approaches) to create more efficient, cleaner, and modern code.',
      p2: 'More than just following trends (no FOMO), this enthusiasm for new things drives me to always search for smarter solutions. Every time a new framework or tool emerges, my instincts immediately jump to action, figuring out how this technology can simplify complex problems. Through a relentless process of trial and error, I\'m building the foundation to become a dynamic developer in the industry.',
      skill_label: 'Core Skills',
    },
    projects: {
      eyebrow: 'Featured Work',
      visit: 'Visit Project',
      prev: 'Previous',
      next: 'Next',
    },
    education: {
      eyebrow: 'Education',
      heading: 'Academic Journey',
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's Collaborate",
      subtitle: 'Have a project idea? I am ready to listen and bring it to life with you.',
      name_label: 'Full Name',
      email_label: 'Email Address',
      message_label: 'Message',
      name_placeholder: 'Full Name',
      email_placeholder: 'name{'@'}email.com',
      message_placeholder: 'Tell me about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will contact you soon.',
      success_btn: 'Message sent successfully!',
    },
    preloader: {
      loading: 'Loading',
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Made with',
      and: 'and',
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
