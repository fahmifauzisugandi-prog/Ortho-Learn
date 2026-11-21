// Ortho-Learn — Batch 3: Pediatric Orthopaedics (Case 37–46)
// Referensi: Tachdjian's Pediatric Orthopaedics, Rockwood & Wilkins' Fractures in Children, Miller's Review of Orthopaedics.

window.registerOrthoCases && window.registerOrthoCases([
  {
    id: "case-37",
    number: 37,
    title: "Slipped Capital Femoral Epiphysis (SCFE)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 3",
    summary: "Pergeseran metafisis femur proksimal ke anterosuperior terhadap epifisis kaput femoris (yang tetap di asetabulum) melalui zona hipertrofik fisis. Klasik pada remaja obesitas usia 10–16 tahun, laki-laki > perempuan.",
    classification: [
      "Loder Classification (Paling Penting untuk Prognosis AVN): STABLE (masih mampu weight-bearing dengan/tanpa kruk, risiko AVN <10%) vs UNSTABLE (tidak mampu weight-bearing sama sekali, risiko AVN hingga 20–50%).",
      "Kronisitas: Akut (<3 minggu), Kronik (>3 minggu, tersering), Akut-on-Kronik."
    ],
    redFlags: [
      "Referred Pain ke LUTUT (melalui cabang n. obturatorius): Remaja obesitas dengan nyeri lutut & jalan pincang WAJIB diperiksa sendi panggulnya!",
      "Drehmann Sign (+): Saat panggul difleksikan pasif, tungkai otomatis mengalami eksternal rotasi dan abduksi wajib.",
      "Jika terjadi pada anak usia <10 tahun atau bertubuh kurus/pendek → curigai endokrinopati (hipotiroidisme, defisiensi GH, osteodistrofi ginjal) dan risiko bilateral tinggi."
    ],
    management: [
      "IGD: Segera buat pasien NON-WEIGHT BEARING (kursi roda/brankar) agar SCFE stabil tidak berubah menjadi tidak stabil!",
      "Radiologi: X-ray Pelvis AP + Frog-Leg Lateral. Tanda klasik: Klein's Line (garis di tepi superior kolum femoris gagal memotong epifisis lateral = Trethowan's Sign) dan metaphyseal blanch sign of Steel.",
      "Definitif: In-situ fixation dengan single cannulated screw (posisi center-center di epifisis). HINDARI reduksi tertutup paksa karena sangat meningkatkan risiko AVN dan kondrolisis!"
    ],
    ppdsPearl: "Hafalkan: (1) Lapisan fisis yang gagal adalah zona hipertrofik; (2) Klein's Line pada foto AP; (3) Komplikasi utama = AVN (terutama pada Loder Unstable) dan Kondrolisis (akibat sekrup menembus sendi/pin penetration).",
    references: ["Rockwood & Wilkins' Fractures in Children", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak laki-laki 13 tahun dengan obesitas datang mengeluh nyeri lutut kanan dan pincang selama 1 bulan. Saat panggul kanan difleksikan, tungkai otomatis berotasi ke eksternal. Pada foto X-ray Pelvis AP, garis di tepi superior kolum femoris tidak memotong epifisis lateral. Tatalaksana definitif utama untuk kasus stabil ini adalah?",
      options: [
        "Reduksi tertutup paksa dengan traksi lalu pemasangan gips spica",
        "In-situ pinning dengan single cannulated screw",
        "Hemiarthroplasty panggul",
        "Observasi dan fisioterapi hingga fisis menutup"
      ],
      answerIndex: 1,
      explanation: "Temuan Drehmann sign (+) dan Klein's line abnormal khas untuk SCFE. Pada SCFE stabil, tatalaksana standar adalah in-situ fixation menggunakan 1 buah cannulated screw tanpa reduksi paksa untuk mencegah AVN."
    }
  },
  {
    id: "case-38",
    number: 38,
    title: "Legg-Calvé-Perthes Disease (LCPD)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 2",
    badge: "NEW BATCH 3",
    summary: "Osteonekrosis (AVN) idiopatik pada epifisis kaput femoris anak. Klasik pada anak laki-laki usia 4–8 tahun yang aktif, bertubuh relatif kecil untuk usianya, dengan keluhan pincang tanpa nyeri (painless limp) dan keterbatasan abduksi serta internal rotasi panggul.",
    classification: [
      "Waldenström Stages (4 Fase Radiologis): (1) Initial/Necrosis (kaput kecil & sklerotik, crescent sign), (2) Fragmentation, (3) Reossification, (4) Residual/Healed.",
      "Herring Lateral Pillar (pada fase fragmentasi, prediktor prognosis terbaik): Group A (tinggi pilar lateral utuh 100%), Group B (>50% tinggi pilar lateral tersisa), Group C (<50% tinggi pilar lateral tersisa — prognosis terburuk)."
    ],
    redFlags: [
      "Faktor prognosis TERPENTING: Usia saat onset (<6 tahun prognosis sangat baik; >8 tahun prognosis buruk) dan keterlibatan pilar lateral (Herring C).",
      "Head-at-Risk Signs (Catterall): Kalsifikasi lateral epifisis, Gage sign (defek radiolusen bentuk V di lateral epifisis), subluksasi lateral kaput, fisis horizontal."
    ],
    management: [
      "Prinsip Utama: 'CONTAINMENT' — menjaga kaput femoris yang lunak tetap berada di dalam mangkuk asetabulum agar terbentuk bulat kembali (biological plasticity) saat reosifikasi.",
      "Usia <6–8 tahun / Herring A–B: Observasi, modifikasi aktivitas, fisioterapi untuk mempertahankan ROM (terutama abduksi), NSAID jangka pendek.",
      "Usia >8 tahun / Herring B–B/C dengan kehilangan containment: Operatif (Proximal Femoral Varus Osteotomy atau Salter Innominate Osteotomy)."
    ],
    ppdsPearl: "Bedakan 3 penyebab utama pincang pada anak berdasarkan usia: 4–8 tahun = Perthes (painless limp, foto sklerotik); 10–16 tahun obesitas = SCFE; segala usia + demam/leukositosis = Septic Arthritis (Kocher).",
    references: ["Tachdjian's Pediatric Orthopaedics", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak laki-laki 6 tahun datang dengan keluhan jalan pincang tanpa demam sejak 2 bulan, ROM panggul kiri terbatas pada abduksi dan internal rotasi. X-ray menunjukkan fragmentasi epifisis kaput femoris. Klasifikasi radiologis manakah yang paling akurat memprediksi prognosis jangka panjang pada fase fragmentasi?",
      options: [
        "Loder Classification",
        "Herring Lateral Pillar Classification",
        "Garden Classification",
        "Salter-Harris Classification"
      ],
      answerIndex: 1,
      explanation: "Herring Lateral Pillar Classification (Group A, B, B/C, C) dinilai pada foto AP selama fase fragmentasi dan merupakan prediktor paling reliabel untuk hasil akhir bentuk kaput femoris (Stulberg outcome)."
    }
  },
  {
    id: "case-39",
    number: 39,
    title: "Pediatric Lateral Condyle Humerus Fracture",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 3",
    summary: "Fraktur siku tersering kedua pada anak setelah suprakondilar humerus (15–20%). Bersifat INTRAARTIKULAR dan melibatkan fisis (biasanya Salter-Harris Tipe IV). Sangat rentan mengalami pergeseran lambat, nonunion, dan deformitas cubitus valgus.",
    classification: [
      "Milch Tipe I: Garis fraktur keluar melalui sulkus kapitelotroklear (lateral dari troklea — siku stabil).",
      "Milch Tipe II (TERSERING): Garis fraktur keluar melalui troklea (siku tidak stabil, setara Salter-Harris IV).",
      "Jakob / Weiss Classification: Berdasarkan derajat pergeseran (<2 mm, 2–4 mm, >4 mm / rotasi)."
    ],
    redFlags: [
      "Trias Komplikasi Klasik bila gagal terapi: Nonunion → Cubitus Valgus progresif → Tardy Ulnar Nerve Palsy (kelumpuhan n. ulnaris puluhan tahun kemudian)!",
      "Wajib foto Internal Oblique View siku — fraktur sering tampak nondisplaced di foto AP, padahal bergeser >2 mm di foto oblique!"
    ],
    management: [
      "Nondisplaced (<2 mm pada semua proyeksi termasuk internal oblique): Long arm cast + wajib kontrol X-ray mingguan selama 2–3 minggu pertama untuk mendeteksi late displacement.",
      "Displaced (>2 mm): Reduksi anatomis dan fiksasi K-wire (CRPP jika engsel kartilago utuh, atau ORIF jika >4 mm/rotasi — HINDARI diseksi posterior kondilus lateral karena suplai darahnya masuk dari posterior!)."
    ],
    ppdsPearl: "Bandingkan 2 deformitas siku anak: Malunion Suprakondilar = Cubitus VARUS ('Gunstock deformity', kosmetik); Nonunion Kondilus Lateral = Cubitus VALGUS + Tardy Ulnar Nerve Palsy!",
    references: ["Rockwood & Wilkins' Fractures in Children", "AO Surgery Reference: Pediatric Elbow"],
    quiz: {
      question: "Komplikasi jangka panjang klasik yang dapat terjadi bertahun-tahun kemudian akibat nonunion fraktur kondilus lateral humerus pada masa anak-anak adalah?",
      options: [
        "Cubitus varus dan cedera nervus radialis",
        "Cubitus valgus dan tardy ulnar nerve palsy",
        "Volkmann ischemic contracture",
        "Myositis ossificans dan cedera nervus medianus"
      ],
      answerIndex: 1,
      explanation: "Nonunion kondilus lateral menyebabkan pertumbuhan asimetris sisi medial lebih dominan sehingga terjadi deformitas cubitus valgus progresif, yang lama-kelamaan meregangkan nervus ulnaris di terowongan kubital (tardy ulnar nerve palsy)."
    }
  },
  {
    id: "case-40",
    number: 40,
    title: "Pediatric Medial Epicondyle Fracture",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 3",
    summary: "Fraktur avulsi apofisis epikondilus medial akibat tarikan grup otot fleksor-pronator saat terjadi gaya valgus pada siku (sering pada anak 9–14 tahun). Sekitar 50% kasus berkaitan dengan dislokasi siku posterolateral!",
    classification: [
      "Ekstraartikular (apofisis tidak berkontribusi pada pertumbuhan panjang humerus).",
      "Urutan osifikasi siku anak — Mnemonik CRITOE: Capitellum (1 th), Radial head (3 th), Internal/Medial epicondyle (5 th), Trochlea (7 th), Olecranon (9 th), External/Lateral epicondyle (11 th)."
    ],
    redFlags: [
      "Jebakan Terbesar di IGD: Jika pada anak usia >6 tahun epikondilus medial 'hilang' dari tempatnya pada X-ray, curigai fragmen TERJEBAK DI DALAM SENDI SIKU (incarcerated fragment)!",
      "Wajib periksa fungsi Nervus Ulnaris (10–16% mengalami neurapraksia)."
    ],
    management: [
      "Indikasi Operasi MUTLAK (Absolute Indications): (1) Fragmen terjebak di dalam sendi (incarcerated intraarticular fragment), (2) Fraktur terbuka, (3) Disfungsi n. ulnaris progresif/terjepit.",
      "Indikasi Relatif: Atlet lempar (overhead athlete), ketidakstabilan valgus, pergeseran >5 mm.",
      "Konservatif: Long arm cast/splint fleksi 90° selama 2–3 minggu (jangan terlalu lama agar siku tidak kaku)."
    ],
    ppdsPearl: "Hafalkan mnemonik CRITOE (1-3-5-7-9-11 tahun)! Jika troklea (7 th) sudah terlihat di X-ray tapi epikondilus medial (5 th) tidak tampak di posisi normalnya, pasti epikondilus medial sudah avulsi dan terjebak di dalam sendi!",
    references: ["Rockwood & Wilkins' Fractures in Children", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Manakah di bawah ini yang merupakan indikasi MUTLAK tindakan operasi (ORIF) pada fraktur epikondilus medial humerus anak?",
      options: [
        "Pergeseran fragmen sebesar 3 mm pada anak usia 10 tahun",
        "Fragmen epikondilus medial terjebak di dalam sendi siku pascareduksi dislokasi",
        "Bengkak sedang di sisi medial siku tanpa defisit neurologis",
        "Fraktur avulsi minimal pada lengan non-dominan"
      ],
      answerIndex: 1,
      explanation: "Fragmen yang terjebak di dalam sendi (incarcerated fragment) menghalangi reduksi kongruen sendi siku dan merupakan indikasi mutlak untuk eksplorasi terbuka dan fiksasi."
    }
  },
  {
    id: "case-41",
    number: 41,
    title: "Nursemaid's Elbow (Pulled Elbow)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 4A",
    badge: "NEW BATCH 3",
    summary: "Subluksasi kaput radius akibat terjepitnya ligamen anulare di antara kaput radius dan kapitelum. Sangat umum pada balita usia 1–4 tahun akibat tarikan aksial mendadak pada lengan bawah yang pronasi dan siku ekstensi.",
    classification: [
      "Diagnosis Klinis Murni — X-ray TIDAK diperlukan bila riwayat tarikan jelas dan tidak ada bengkak/memar/nyeri tekan tulang."
    ],
    redFlags: [
      "Anak menolak menggerakkan lengan ('pseudoparalisis') dan memegangnya dalam posisi siku sedikit fleksi serta lengan bawah PRONASI.",
      "Jika ada bengkak signifikan, deformitas, atau riwayat jatuh (bukan ditarik) → WAJIB X-ray untuk menyingkirkan fraktur suprakondilar atau klavikula sebelum melakukan manuver reduksi!"
    ],
    management: [
      "Manuver Reduksi 1 (Hyperpronation — angka keberhasilan pertama lebih tinggi & kurang nyeri): Pegang siku dengan ibu jari di kaput radius, lalu pronasikan pergelangan tangan anak secara tegas hingga terasa bunyi 'klik'.",
      "Manuver Reduksi 2 (Supination-Flexion): Supinasikan lengan bawah penuh lalu fleksikan siku secara penuh sambil menekan lembut kaput radius.",
      "Evaluasi: Anak biasanya kembali mau meraih mainan dalam 5–15 menit. Tidak perlu gips/sling! Edukasi orang tua agar tidak menarik tangan/pergelangan tangan anak."
    ],
    ppdsPearl: "Kompetensi SKDI 4A (dokter umum wajib bisa tuntas!). Ingat: Teknik Hyperpronation terbukti dalam uji klinis memiliki first-attempt success rate lebih tinggi dibanding Supination-Flexion.",
    references: ["Rockwood & Wilkins' Fractures in Children", "Cochrane Review: Manipulative Interventions for Pulled Elbow"],
    quiz: {
      question: "Anak perempuan 2,5 tahun menangis dan tidak mau menggerakkan lengan kirinya setelah tangannya ditarik ayahnya agar tidak jatuh. Lengan dipertahankan sedikit fleksi dan pronasi, tanpa bengkak atau memar. Struktur anatomis apakah yang terjepit pada kondisi ini?",
      options: [
        "Ligamen kolateral ulnaris",
        "Ligamen anulare radius",
        "Tendon bisep distal",
        "Nervus interoseus posterior"
      ],
      answerIndex: 1,
      explanation: "Pada Nursemaid's elbow, tarikan aksial pada lengan pronasi menyebabkan bagian distal ligamen anulare terlepas dan terjepit ke dalam sendi radiokapitellar."
    }
  },
  {
    id: "case-42",
    number: 42,
    title: "Toddler's Fracture",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 3",
    summary: "Fraktur spiral nondisplaced pada sepertiga distal diafisis tibia yang terjadi pada anak usia baru belajar berjalan (9 bulan – 3 tahun) akibat mekanisme puntiran energi rendah (terpeleset/jatuh ringan).",
    classification: [
      "Fraktur stabil dengan periosteum yang masih utuh (intact periosteal sleeve)."
    ],
    redFlags: [
      "Foto X-ray awal sering tampak NORMAL (hingga 40% kasus bersifat occult)! Bila klinis sangat curiga (menolak berjalan + nyeri tekan tibia distal), tetap terapi sebagai toddler's fracture dan ulangi X-ray 10–14 hari kemudian (akan tampak reaksi periosteal).",
      "Selalu bedakan dengan Non-Accidental Injury (NAI / Child Abuse): Toddler's fracture terjadi pada anak yang SUDAH bisa berjalan (ambulatory). Fraktur spiral tibia/femur pada bayi yang BELUM bisa berjalan adalah tanda bahaya NAI!"
    ],
    management: [
      "IGD/Poli: Imobilisasi menggunakan Controlled Ankle Motion (CAM) boot, splint, atau short/long leg cast selama 2–3 minggu untuk kontrol nyeri.",
      "Prognosis: Sangat baik; hampir 100% sembuh sempurna tanpa komplikasi deformitas atau gangguan pertumbuhan."
    ],
    ppdsPearl: "Poin krusial ujian: Fraktur spiral tibia distal pada anak usia 2 tahun yang terpeleset = Toddler's fracture (jinak); namun fraktur tulang panjang (terutama femur/humerus/corner metaphyseal fracture) pada bayi <1 tahun yang belum berjalan = wajib evaluasi Child Abuse (NAI)!",
    references: ["Rockwood & Wilkins' Fractures in Children", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak laki-laki usia 20 bulan tiba-tiba menolak menapakkan kaki kanannya setelah terpeleset saat berlari di rumah. Tidak ada demam. Pemeriksaan fisik menunjukkan nyeri tekan di tibia distal kanan, namun X-ray AP/Lateral hari ini tampak normal. Langkah paling tepat adalah?",
      options: [
        "Pulangkan tanpa imobilisasi karena X-ray normal",
        "Imobilisasi (splint/boot/cast) selama 2–3 minggu dan evaluasi klinis/radiologis ulang dalam 10–14 hari",
        "Lakukan MRI emergensi dengan sedasi umum hari ini",
        "Rujuk segera untuk ORIF tibia"
      ],
      answerIndex: 1,
      explanation: "Toddler's fracture sering tidak terlihat pada foto X-ray awal (occult). Tatalaksana yang tepat adalah imobilisasi untuk kenyamanan dan perlindungan, dengan foto ulang 10–14 hari bila perlu untuk melihat reaksi periosteal."
    }
  },
  {
    id: "case-43",
    number: 43,
    title: "Pediatric Radial Neck Fracture",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 3",
    summary: "Berbeda dengan dewasa (yang sering patah di kaput radius), anak-anak jauh lebih sering mengalami fraktur di KOLUM radius (Salter-Harris II atau metafisis) akibat jatuh bertumpu tangan dengan gaya valgus pada siku.",
    classification: [
      "Judet Classification: Tipe I (nondisplaced), Tipe II (<30° angulasi), Tipe III (30°–60° angulasi), Tipe IVa (60°–80°), Tipe IVb (>80° angulasi)."
    ],
    redFlags: [
      "JANGAN PERNAH melakukan eksisi kaput radius (radial head excision) pada anak-anak! Hal ini menyebabkan migrasi proksimal radius (Essex-Lopresti-like), cubitus valgus berat, dan nyeri pergelangan tangan kronik.",
      "Reduksi terbuka (open reduction) memiliki risiko tinggi AVN kaput radius, penutupan fisis dini, dan radioulnar synostosis → utamakan teknik tertutup/perkutan!"
    ],
    management: [
      "Angulasi <30° (pada anak <10 tahun) dengan pronasi-supinasi baik: Konservatif (long arm splint/cast 1–2 minggu lalu mobilisasi dini).",
      "Angulasi >30° (atau >15° pada anak mendekati maturitas skeletal): Reduksi tertutup (Patterson/Israeli maneuver) atau reduksi perkutan menggunakan K-wire joystick / Teknik Metaizeau (intramedullary elastic nail dari radius distal diputar untuk mengembalikan kaput radius)."
    ],
    ppdsPearl: "Kata kunci teknik bedah anak: 'Metaizeau Technique' (retrograde flexible intramedullary nail) adalah metode favorit untuk mereduksi fraktur kolum radius anak secara tertutup tanpa merusak suplai darah kaput radius.",
    references: ["Rockwood & Wilkins' Fractures in Children", "AO Surgery Reference: Pediatric Radius"],
    quiz: {
      question: "Mengapa eksisi kaput radius (radial head excision) merupakan kontraindikasi mutlak pada fraktur kolum/kaput radius anak-anak dengan fisis yang masih terbuka?",
      options: [
        "Menyebabkan cedera langsung pada arteri brakialis",
        "Menyebabkan migrasi proksimal radius, cubitus valgus progresif, dan gangguan sendi pergelangan tangan",
        "Menyebabkan pseudarthrosis klavikula",
        "Menghilangkan insersi otot trisep brakii"
      ],
      answerIndex: 1,
      explanation: "Pada anak-anak, eksisi kaput radius menghilangkan penyangga lateral siku sehingga terjadi cubitus valgus progresif dan migrasi proksimal radius yang merusak sendi radioulnar distal (DRUJ)."
    }
  },
  {
    id: "case-44",
    number: 44,
    title: "Osteogenesis Imperfecta (OI)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 2",
    badge: "NEW BATCH 3",
    summary: "Kelainan genetik jaringan ikat ('Brittle Bone Disease') akibat mutasi gen COL1A1 atau COL1A2 yang mengganggu sintesis atau struktur KOLAGEN TIPE I. Ditandai fraktur multipel akibat trauma minimal, sklera biru, dentinogenesis imperfecta, dan gangguan pendengaran.",
    classification: [
      "Sillence Classification (4 Tipe Klasik):",
      "Tipe I (Autosomal Dominan, TERSERING & paling ringan): Kuantitas kolagen kurang, sklera biru, fraktur setelah mulai berjalan.",
      "Tipe II (Lethal Perinatal): Sangat berat, fraktur multipel in-utero, meninggal perinatal akibat gagal napas.",
      "Tipe III (Progressive Deforming): Paling berat yang bertahan hidup, perawakan sangat pendek, skoliosis berat, wajah triangular.",
      "Tipe IV (Sedang): Sklera normal/putih, deformitas tulang panjang sedang."
    ],
    redFlags: [
      "Diagnosis banding wajib di IGD: Non-Accidental Injury (Child Abuse) — bedakan melalui riwayat keluarga, sklera biru, Wormian bones pada X-ray tengkorak, dan dentinogenesis imperfecta.",
      "Risiko hipertermia maligna / reaksi anestesi serta fraktur iatrogenik saat memposisikan pasien di meja operasi."
    ],
    management: [
      "Medikamentosa: Bifosfonat intravena (Pamidronate / Zoledronic acid) secara siklik — menghambat osteoklas, meningkatkan densitas tulang kortikal, dan menurunkan angka fraktur.",
      "Ortopedi Definitif: Pada fraktur berulang/bowing tulang panjang → osteotomi multipel dan pemasangan Telescoping Intramedullary Rod (seperti Fassier-Duval rod) yang dapat memanjang mengikuti pertumbuhan tulang anak."
    ],
    ppdsPearl: "Hafalkan: (1) Defek = Kolagen Tipe I (COL1A1/COL1A2); (2) Sillence Tipe I = paling sering/ringan, Tipe II = letal perinatal; (3) Implan khusus = Telescoping IM Rod (Fassier-Duval) + terapi Bifosfonat.",
    references: ["Tachdjian's Pediatric Orthopaedics", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Kelainan molekuler utama yang mendasari Osteogenesis Imperfecta dan jenis implan intrameduler pilihan untuk tulang panjang anak yang masih bertumbuh adalah?",
      options: [
        "Defek Kolagen Tipe II; Locking compression plate",
        "Defek Kolagen Tipe I (COL1A1/COL1A2); Telescoping intramedullary rod (Fassier-Duval)",
        "Mutasi reseptor FGFR3; External fixator sirkular",
        "Defisiensi enzim fosfatase alkali; K-wire perkutan"
      ],
      answerIndex: 1,
      explanation: "Osteogenesis Imperfecta disebabkan mutasi gen COL1A1/COL1A2 (Kolagen Tipe I). Telescoping rod (Fassier-Duval) digunakan agar batang implan ikut memanjang seiring pertumbuhan anak dan mencegah fraktur di ujung implan."
    }
  },
  {
    id: "case-45",
    number: 45,
    title: "Blount Disease vs Rickets (Genu Varum)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 2",
    badge: "NEW BATCH 3",
    summary: "Dua penyebab patologis utama genu varum (kaki O) pada anak yang wajib dibedakan dari genu varum fisiologis (normal pada usia <2 tahun). Blount Disease (Tibia Vara) disebabkan gangguan pertumbuhan fisis tibia proksimal posteromedial akibat beban mekanik berlebih (Hukum Hueter-Volkmann).",
    classification: [
      "Blount Disease: Infantile (<3 tahun, klasik pada anak obesitas yang berjalan dini <12 bulan, sering bilateral) vs Adolescent (>10 tahun, biasanya unilateral).",
      "Langenskiöld Stages (I–VI): Menilai progresivitas depresi metafisis medial hingga terbentuknya bony bar (Stage V–VI).",
      "Rickets: Gangguan mineralisasi osteoid pada fisis akibat defisiensi Vitamin D/kalsium/fosfat (X-linked hypophosphatemic rickets)."
    ],
    redFlags: [
      "Drennan's Metaphyseal-Diaphyseal Angle (MDA) pada X-ray tungkai berdiri: MDA <11° = Genu varum fisiologis; MDA >16° = sangat spesifik untuk Blount Disease!",
      "Tanda radiologis klasik Rickets: Fisis melebar (widening), metafisis berbentuk mangkuk (cupping) dan berjumbai (fraying), serta rachitic rosary di kostokondral."
    ],
    management: [
      "Genu Varum Fisiologis (<2 tahun, simetris, MDA <11°): Observasi & edukasi orang tua (akan terkoreksi spontan menuju valgus pada usia 3–4 tahun).",
      "Blount Infantile (Usia <3 tahun, Langenskiöld I–II): KAFO bracing. Usia >3–4 tahun atau Langenskiöld ≥III: High Tibial Osteotomy (valgus osteotomy) atau hemiepiphysiodesis lateral (guided growth).",
      "Rickets: Koreksi metabolik (Vitamin D, kalsium, fosfat) TERLEBIH DAHULU sebelum mempertimbangkan koreksi bedah deformitas!"
    ],
    ppdsPearl: "Hafalkan angka Drennan's MDA (>16° = Blount, <11° = fisiologis) dan prinsip emas Rickets: JANGAN operasi tulang sebelum kelainan metabolik (ALP, PTH, Vit D, Ca, Fosfat) dikoreksi!",
    references: ["Tachdjian's Pediatric Orthopaedics", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak usia 2,5 tahun dengan obesitas dan riwayat mulai berjalan di usia 9 bulan datang dengan genu varum progresif. Pada X-ray tungkai berdiri, berapakah nilai Metaphyseal-Diaphyseal Angle (Drennan's MDA) yang sangat mendukung diagnosis Infantile Blount Disease?",
      options: [
        "< 5°",
        "< 11°",
        "> 16°",
        "20°–40°"
      ],
      answerIndex: 2,
      explanation: "Drennan's Metaphyseal-Diaphyseal Angle (MDA) >16° sangat spesifik untuk Infantile Blount Disease (sedangkan MDA <11° menunjukkan genu varum fisiologis)."
    }
  },
  {
    id: "case-46",
    number: 46,
    title: "Pediatric Traumatic Hip Dislocation",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 3",
    summary: "Dislokasi panggul traumatik pada anak bersifat jarang namun merupakan EMERGENSI ORTOPEDI. Berbeda dengan dewasa, pada anak usia <6 tahun dislokasi dapat terjadi akibat trauma energi rendah (terjatuh saat bermain) karena kelemahan ligamen dan asetabulum yang masih kartilaginosa.",
    classification: [
      "Posterior Dislocation (90% kasus): Tungkai tampak memendek, FLEKSI, ADDUKSI, dan INTERNAL ROTASI.",
      "Anterior Dislocation (10% kasus): Tungkai tampak EKSTERNAL ROTASI dan ABDUKSI."
    ],
    redFlags: [
      "Waktu adalah Otot/Tulang (Golden Period <6 Jam): Penundaan reduksi >6 jam meningkatkan risiko Avascular Necrosis (AVN) kaput femoris hingga 20 kali lipat!",
      "Wajib evaluasi reduksi KONGRUEN pascareduksi: Jika celah sendi melebar asimetris dibanding sisi sehat, curigai interposisi jaringan lunak (labrum posterior terbalik atau fragmen osteokondral) → indikasi CT-Scan/MRI dan reduksi terbuka!"
    ],
    management: [
      "IGD: Evaluasi ATLS dan status nervus iskiadikus (terutama komponen peroneus — dorsofleksi ibu jari kaki).",
      "Definitif Segera (<6 jam): Reduksi tertutup lembut di bawah sedasi dalam atau anestesi umum (Allis maneuver) — JANGAN melakukan upaya reduksi berulang yang kasar (risiko fraktur fisis iatrogenik!).",
      "Pasca-reduksi: Konfirmasi X-ray Pelvis AP (bandingkan lebar celah sendi bilateral) + CT-Scan/MRI bila ada keraguan kongruensi; imobilisasi singkat (spica cast pada anak kecil atau proteksi weight-bearing pada anak besar) dan follow-up minimal 2 tahun untuk memantau AVN."
    ],
    ppdsPearl: "Dua poin wajib ujian: (1) Target reduksi <6 jam untuk menekan risiko AVN; (2) Setelah reduksi, WAJIB pastikan reduksi konsentris/kongruen (jika celah sendi masih lebar, ada labrum/fragmen terjepit di dalam sendi).",
    references: ["Rockwood & Wilkins' Fractures in Children", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak laki-laki 7 tahun mengalami dislokasi panggul posterior kanan akibat terjatuh saat bermain sepak bola. Setelah dilakukan reduksi tertutup dalam 3 jam di bawah anestesi umum, foto X-ray kontrol menunjukkan celah sendi panggul kanan tampak lebih lebar dibanding kiri. Apa penyebab paling mungkin dan langkah selanjutnya?",
      options: [
        "Variasi normal pascareduksi; boleh langsung pulang",
        "Interposisi labrum posterior atau fragmen osteokondral di dalam sendi; lakukan MRI/CT-Scan dan reduksi terbuka",
        "Efusi sendi ringan; cukup berikan NSAID",
        "Malunion asetabulum; pasang traksi kulit 6 minggu"
      ],
      answerIndex: 1,
      explanation: "Celah sendi yang melebar asimetris pascareduksi (non-concentric reduction) menandakan adanya jaringan lunak (tersering labrum posterior yang terinversi) atau fragmen osteokondral terjebak di dalam sendi, yang memerlukan MRI/CT-Scan dan ekstraksi melalui reduksi terbuka."
    }
  }
]);
