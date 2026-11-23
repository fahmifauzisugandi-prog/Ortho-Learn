// Ortho-Learn — Batch 10: Upper Extremity, Lower Extremity & Pediatric Expansion (Case 101–113)
// Referensi: Rockwood & Green's, Miller's Review of Orthopaedics, Green's Operative Hand Surgery, Tachdjian's.

window.registerOrthoCases && window.registerOrthoCases([
  {
    id: "case-101",
    number: 101,
    title: "Radial Head Fracture (Mason) & Essex-Lopresti",
    category: "Upper Extremity & Hand",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 10",
    summary: "Fraktur siku tersering pada dewasa akibat jatuh FOOSH dengan siku ekstensi dan lengan bawah pronasi. Evaluasi wajib mencakup blok mekanik rotasi lengan bawah serta nyeri pergelangan tangan (DRUJ) untuk menyingkirkan Essex-Lopresti lesion.",
    classification: [
      "Mason Tipe I: Nondisplaced (<2 mm), tidak ada blok mekanik rotasi.",
      "Mason Tipe II: Displaced (>2 mm) atau melibatkan >30% permukaan artikular, dapat menimbulkan blok mekanik.",
      "Mason Tipe III: Kominutif berat seluruh kaput radius (tidak dapat direkonstruksi).",
      "Mason Tipe IV: Fraktur kaput radius disertai dislokasi siku.",
      "Essex-Lopresti Lesion: Fraktur kaput radius + robekan Interosseous Membrane (IOM) + dislokasi DRUJ."
    ],
    redFlags: [
      "WAJIB palpasi pergelangan tangan (DRUJ) dan lengan bawah pada setiap fraktur kaput radius! Jika ada Essex-Lopresti lesion, eksisi kaput radius merupakan KONTRAINDIKASI MUTLAK karena menyebabkan migrasi proksimal radius berat!",
      "Lakukan uji blok mekanik dengan menyuntikkan lidokain intraartikular (aspirasi hemartrosis) agar nyeri tidak menyamarkan blok mekanik sejati."
    ],
    management: [
      "Mason Tipe I: Konservatif — sling singkat 3–5 hari lalu mobilisasi dini (cegah kekakuan siku!).",
      "Mason Tipe II (dengan blok mekanik): ORIF dengan headless/mini screws di 'Safe Zone' (area non-artikular lateral kaput radius).",
      "Mason Tipe III (kominutif): Radial Head Arthroplasty (terutama bila ada instabilitas ligamen/Essex-Lopresti). Eksisi hanya dipertimbangkan pada lansia low-demand dengan ligamen utuh."
    ],
    ppdsPearl: "Hafalkan 3 komponen Essex-Lopresti (Fraktur kaput radius + Ruptur IOM + Dislokasi DRUJ) dan larangan mutlak eksisi kaput radius pada kondisi tersebut!",
    references: ["Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pria 30 tahun jatuh bertumpu tangan mengalami fraktur kominutif kaput radius (Mason III) disertai nyeri hebat dan instabilitas pada sendi radioulnar distal (DRUJ). Diagnosis dan prinsip tatalaksana yang paling tepat adalah?",
      options: [
        "Monteggia lesion; eksisi kaput radius segera",
        "Essex-Lopresti lesion; Radial Head Arthroplasty dan stabilisasi DRUJ (JANGAN eksisi kaput radius)",
        "Galeazzi fracture; long arm cast 6 minggu",
        "Terrible triad; observasi dengan arm sling"
      ],
      answerIndex: 1,
      explanation: "Kombinasi fraktur kaput radius, robekan membran interosea, dan dislokasi DRUJ adalah Essex-Lopresti lesion. Eksisi kaput radius dilarang keras karena memicu migrasi proksimal radius; pilihan utamanya adalah Radial Head Arthroplasty + stabilisasi DRUJ."
    }
  },
  {
    id: "case-102",
    number: 102,
    title: "Distal Biceps Tendon Rupture (Hook Test)",
    category: "Upper Extremity & Hand",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Avulsi tendon biseps distal dari tuberositas radius akibat beban eksentrik mendadak pada siku fleksi 90° (klasik pada pria usia 40–60 tahun, perokok, atau pengguna steroid anabolik). Biseps adalah SUPINATOR utama lengan bawah.",
    classification: [
      "Complete Tear (tersering, >90%): Retraksi otot biseps ke proksimal ('Reverse Popeye Deformity') bila lacertus fibrosus ikut robek.",
      "Partial Tear: Nyeri antekubital persisten dan kelemahan supinasi tanpa retraksi penuh."
    ],
    redFlags: [
      "Hook Test (O'Driscoll — Sensitivitas & Spesifisitas ~100%): Siku fleksi 90° dan supinasi aktif; pemeriksa mencoba mengaitkan jari telunjuk dari sisi LATERAL ke bawah tendon biseps. Jika jari tidak bisa mengait tendon → Hook Test POSITIF (ruptur komplit)!",
      "Komplikasi tersering pasca-repair: Cedera Lateral Antebrachial Cutaneous Nerve (LABCN — cabang terminal n. muskulokutaneus) pada pendekatan anterior tunggal, dan Heterotopic Ossification / radioulnar synostosis pada pendekatan 2-insisi."
    ],
    management: [
      "Konservatif: Hanya untuk pasien lansia low-demand (menyebabkan penurunan kekuatan SUPINASI ~40% dan fleksi ~30%).",
      "Definitif (Pasien Aktif): Surgical Reinsertion ke tuberositas radius (cortical button / suture anchor) idealnya dalam < 3–4 minggu sebelum tendon retraksi dan membutuhkan allograft."
    ],
    ppdsPearl: "Hafalkan: (1) Tes paling akurat = Hook Test (dari sisi lateral!); (2) Fungsi yang paling hilang jika tidak dioperasi = SUPINASI (40%); (3) Saraf paling sering cedera saat repair anterior = LABCN (Lateral Antebrachial Cutaneous Nerve)!",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Pria 48 tahun merasakan sensasi 'pop' di lipat siku kanan saat mengangkat beban berat. Pemeriksaan Hook Test positif. Fungsi utama apakah yang paling banyak hilang jika pasien memilih terapi konservatif?",
      options: [
        "Ekstensi siku",
        "Supinasi lengan bawah (hilang ~40%)",
        "Pronasi lengan bawah",
        "Ekstensi pergelangan tangan"
      ],
      answerIndex: 1,
      explanation: "Otot biceps brachii adalah supinator utama lengan bawah (sementara brachialis adalah fleksor utama siku). Ruptur biseps distal yang tidak direpair menyebabkan kehilangan kekuatan supinasi hingga 40%."
    }
  },
  {
    id: "case-103",
    number: 103,
    title: "Lateral & Medial Epicondylitis (Tennis & Golfer's Elbow)",
    category: "Upper Extremity & Hand",
    skdi: "SKDI 4A",
    badge: "NEW BATCH 10",
    summary: "Tendinopati degeneratif (angiofibroblastic hyperplasia — BUKAN inflamasi akut murni) pada origo tendon ekstensor atau fleksor pergelangan tangan di siku akibat overuse berulang.",
    classification: [
      "Lateral Epicondylitis (Tennis Elbow — jauh lebih sering): Melibatkan origo EXTENSOR CARPI RADIALIS BREVIS (ECRB). Tes provokasi: Cozen's Test & Maudsley's Test (ekstensi jari tengah melawan tahanan).",
      "Medial Epicondylitis (Golfer's Elbow): Melibatkan origo PRONATOR TERES dan FLEXOR CARPI RADIALIS (FCR)."
    ],
    redFlags:
