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
    redFlags: [
      "Diagnosis banding wajib Lateral Epicondylitis yang refrakter: Radial Tunnel Syndrome (kompresi PIN — nyeri tekan 3–5 cm LEBIH DISTAL dari epikondilus lateral, tepat di atas terowongan radial!).",
      "Pada Medial Epicondylitis, hingga 20% disertai gejala kompresi Nervus Ulnaris di cubital tunnel."
    ],
    management: [
      "Lini Pertama (>90% sembuh dalam 6–12 bulan!): Modifikasi aktivitas, fisioterapi latihan EKSENTRIK (eccentric strengthening), counterforce brace/strap, dan NSAID topikal/oral.",
      "Catatan Injeksi: Injeksi kortikosteroid hanya meredakan nyeri jangka pendek (<6 minggu) namun meningkatkan angka kekambuhan jangka panjang; PRP sering dipertimbangkan pada kasus kronik.",
      "Operatif (Jarang, gagal konservatif >6–12 bulan): Debridemen jaringan degeneratif ECRB (Nirschl procedure — jaga ligamen LUCL agar siku tidak instabil!)."
    ],
    ppdsPearl: "Hafalkan pasangan otot utama: Tennis Elbow (Lateral) = ECRB; Golfer's Elbow (Medial) = Pronator Teres & FCR. Dan patologi histologisnya adalah Angiofibroblastic Hyperplasia!",
    references: ["Miller's Review of Orthopaedics", "AAOS / Nirschl Clinical Guidelines"],
    quiz: {
      question: "Tendon otot manakah yang paling spesifik dan paling sering mengalami degenerasi (angiofibroblastic hyperplasia) pada Lateral Epicondylitis (Tennis Elbow)?",
      options: [
        "Extensor Carpi Radialis Brevis (ECRB)",
        "Pronator Teres",
        "Flexor Carpi Ulnaris (FCU)",
        "Brachioradialis"
      ],
      answerIndex: 0,
      explanation: "Extensor Carpi Radialis Brevis (ECRB) adalah struktur primer yang mengalami degenerasi mikroskopik (angiofibroblastic hyperplasia) pada Lateral Epicondylitis."
    }
  },
  {
    id: "case-104",
    number: 104,
    title: "Perilunate & Lunate Dislocation (Mayfield)",
    category: "Upper Extremity & Hand",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 10",
    summary: "Cedera energi tinggi pergelangan tangan (jatuh hiperekstensi + deviasi ulnar) yang menyebabkan disrupsi progresif ligamen karpal mengelilingi lunatum. Hingga 25% kasus TERLEWAT di IGD!",
    classification: [
      "Mayfield Stages (Progresi Radial ke Ulnar):",
      "• Stage I: Disosiasi Scapholunate (SL ligament robek → 'Terry Thomas Sign': celah SL > 3 mm).",
      "• Stage II: Dislokasi Capitolunate (kapitatum bergeser ke dorsal terhadap lunatum).",
      "• Stage III: Disrupsi Lunotriquetral (LT ligament robek — Perilunate Dislocation).",
      "• Stage IV: Dislokasi LUNATUM ke VOLAR ('Spilled Teacup Sign' pada X-ray lateral!)."
    ],
    redFlags: [
      "Cek 3 Garis Gilula (Gilula's Arcs) pada foto PA dan kesejajaran 'Apple-in-Cup' (Radius–Lunatum–Kapitatum) pada foto Lateral!",
      "Dislokasi lunatum ke volar (Mayfield IV) langsung menekan Nervus Medianus di carpal tunnel → Acute Carpal Tunnel Syndrome (EMERGENSI reduksi & dekompresi!)."
    ],
    management: [
      "IGD: Cek fungsi n. medianus, lakukan reduksi tertutup segera (Tavernier maneuver) untuk membebaskan tekanan pada n. medianus, pasang splint, dan rujuk emergensi Sp.OT.",
      "Definitif (Wajib Operatif): ORIF + Ligament Repair (SL/LT) + K-wire fiksasi karpal + Carpal Tunnel Release bila ada kompresi n. medianus. Pada Greater Arc Injury (Trans-scaphoid Perilunate) → fiksasi skafoid dengan headless screw."
    ],
    ppdsPearl: "Hafalkan 2 tanda radiologis klasik: 'Terry Thomas Sign' (celah SL >3 mm) dan 'Spilled Teacup Sign' (lunatum tumpah ke volar pada X-ray lateral = Mayfield Stage IV)!",
    references: ["Green's Operative Hand Surgery", "Rockwood & Green's Fractures in Adults"],
    quiz: {
      question: "Pada foto X-ray lateral pergelangan tangan pasien pascakecelakaan motor, tampak tulang lunatum berotasi dan bergeser ke arah volar menyerupai cangkir tumpah ('Spilled Teacup Sign') disertai baal pada jari 1–3. Menurut klasifikasi Mayfield, ini merupakan?",
      options: [
        "Mayfield Stage I (Scapholunate dissociation)",
        "Mayfield Stage II (Capitolunate dislocation)",
        "Mayfield Stage IV (Volar Lunate Dislocation)",
        "Fraktur Colles ekstraartikular"
      ],
      answerIndex: 2,
      explanation: "Spilled Teacup Sign pada foto lateral adalah gambaran patognomonik Dislokasi Lunatum ke volar (Mayfield Stage IV), yang sering memicu Acute Carpal Tunnel Syndrome."
    }
  },
  {
    id: "case-105",
    number: 105,
    title: "Adhesive Capsulitis (Frozen Shoulder) & SLAP Tear",
    category: "Upper Extremity & Hand",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Adhesive Capsulitis adalah kontraktur fibrotik kapsul sendi glenohumeral yang menyebabkan hilangnya ROM AKTIF MAUPUN PASIF bahu (terutama Eksternal Rotasi). Sangat erat kaitannya dengan Diabetes Mellitus dan penyakit tiroid.",
    classification: [
      "3 Fase Frozen Shoulder: (1) Freezing (nyeri dominan, 2–9 bln), (2) Frozen (kaku dominan, nyeri berkurang, 4–12 bln), (3) Thawing (pemulihan bertahap, 12–24 bln).",
      "SLAP Tear (Superior Labrum Anterior to Posterior — Snyder I–IV): Tipe II (avulsi jangkar tendon biseps & labrum superior) paling sering dan secara klinis bermakna pada atlet lempar (overhead athletes). Tes: O'Brien Active Compression Test."
    ],
    redFlags: [
      "Kunci pembeda di poli: Pada Rotator Cuff Tear, ROM AKTIF terbatas tapi ROM PASIF PENUH; pada Frozen Shoulder, ROM AKTIF DAN PASIF sama-sama terbatas (terutama Eksternal Rotasi)!",
      "Wajib foto X-ray bahu sebelum mendiagnosis Frozen Shoulder untuk menyingkirkan OA glenohumeral atau dislokasi bahu posterior yang terlewat!"
    ],
    management: [
      "Frozen Shoulder (Self-limiting, >90% membaik non-operatif): Fisioterapi peregangan kapsul (stretching), NSAID, dan Injeksi Kortikosteroid intraartikular (sangat efektif di fase Freezing). Jika refrakter >6–12 bulan → Arthroscopic Capsular Release / Manipulation Under Anesthesia (MUA).",
      "SLAP Tipe II: Fisioterapi dulu; bila gagal pada atlet muda → Arthroscopic SLAP Repair (atau Biceps Tenodesis pada usia >35–40 tahun)."
    ],
    ppdsPearl: "Hafalkan pembeda klasik: Rotator Cuff = ROM pasif normal; Frozen Shoulder = ROM aktif & pasif terbatas (khas pada DM/tiroid, struktur pertama berkontraktur = Rotator Interval & Ligamen Korakohumeral)!",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Wanita 52 tahun dengan riwayat Diabetes Mellitus mengeluh bahu kanan kaku dan nyeri sejak 4 bulan. Pada pemeriksaan fisik, baik gerakan aktif MAUPUN pasif bahu sangat terbatas terutama pada eksternal rotasi, sementara X-ray bahu normal. Diagnosis paling tepat adalah?",
      options: [
        "Rotator Cuff Tear komplit",
        "Adhesive Capsulitis (Frozen Shoulder)",
        "Dislokasi bahu anterior",
        "Subacromial bursitis akut"
      ],
      answerIndex: 1,
      explanation: "Keterbatasan ROM aktif dan pasif secara bersamaan (terutama eksternal rotasi) dengan X-ray normal pada pasien DM sangat khas untuk Adhesive Capsulitis (Frozen Shoulder)."
    }
  },
  {
    id: "case-106",
    number: 106,
    title: "Distal Femur Fracture (AO 33 & Hoffa Fracture)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 10",
    summary: "Fraktur 9–15 cm distal femur dengan distribusi bimodal (trauma energi tinggi dewasa muda vs jatuh energi rendah lansia/periprostetik). Memiliki deforming force klasik yang menyebabkan angulasi apeks posterior.",
    classification: [
      "AO/OTA 33: 33-A (Ekstraartikular), 33-B (Partial Articular), 33-C (Complete Articular).",
      "Hoffa Fracture (AO 33-B3): Fraktur bidang KORONAL pada kondilus femur posterior (tersering kondilus LATERAL) — sangat sering terlewat pada X-ray AP polos!"
    ],
    redFlags: [
      "Deforming Force Klasik: Otot GASTROCNEMIUS menarik fragmen distal ke arah FLEKSI (angulasi apeks posterior) → fragmen tajam dapat mencederai Arteri Poplitea!",
      "Wajib CT-Scan pada semua fraktur intraartikular femur distal (33-B/C) untuk mendeteksi Hoffa Fracture (terdapat pada ~38% fraktur suprakondilar-interkondilar energi tinggi!)."
    ],
    management: [
      "IGD: Evaluasi vaskular (ABI) & saraf peroneus, imobilisasi long leg splint (fleksi lutut ringan untuk merelaksasi gastrocnemius), rujuk Sp.OT.",
      "Definitif: ORIF dengan Lateral Distal Femoral Locking Plate (atau Retrograde IMN pada 33-A/C1 simpel). Hoffa Fracture wajib difiksasi dengan Anterior-to-Posterior (atau P-to-A) headless/lag screws tegak lurus garis fraktur koronal."
    ],
    ppdsPearl: "Hafalkan: (1) Otot penyebab deformitas ekstensi/apeks posterior = Gastrocnemius; (2) Hoffa Fracture = fraktur bidang koronal kondilus posterior (tersering lateral) yang wajib dicari dengan CT-Scan!",
    references: ["Rockwood & Green's Fractures in Adults", "AO Surgery Reference: Distal Femur"],
    quiz: {
      question: "Pada fraktur suprakondilar femur distal, otot manakah yang menarik fragmen distal ke arah fleksi (menyebabkan angulasi apeks posterior yang mengancam arteri poplitea)?",
      options: [
        "Quadriceps femoris",
        "Gastrocnemius",
        "Iliopsoas",
        "Tibialis anterior"
      ],
      answerIndex: 1,
      explanation: "Origo otot gastrocnemius melekat di aspek posterior kondilus femur sehingga menarik fragmen distal ke arah fleksi/posterior."
    }
  },
  {
    id: "case-107",
    number: 107,
    title: "Quadriceps vs Patellar Tendon Rupture",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Dua penyebab cedera mekanisme ekstensor lutut yang dibedakan secara klasik berdasarkan USIA pasien dan posisi patela pada X-ray lateral (Patella Baja vs Patella Alta).",
    classification: [
      "Quadriceps Tendon Rupture: Usia > 40 tahun (tersering 50–60 thn), faktor risiko DM, gout, CKD/hiperparatiroid, steroid, fluoroquinolone. X-ray Lateral: PATELLA BAJA (patela turun ke inferior).",
      "Patellar Tendon Rupture: Usia < 40 tahun (atlet muda), riwayat tendinopati patela ('jumper's knee'). X-ray Lateral: PATELLA ALTA (patela tertarik naik ke superior)."
    ],
    redFlags: [
      "Trias Klinis Ruptur Komplit: (1) Nyeri akut, (2) Teraba celah (palpable gap) di atas atau bawah patela, (3) Ketidakmampuan melakukan Straight Leg Raise (SLR) aktif!",
      "Insall-Salvati Ratio pada X-ray Lateral fleksi 30° (Panjang Tendon Patela / Panjang Patela): Normal = 0.8–1.2. > 1.2 = Patella Alta (ruptur tendon patela); < 0.8 = Patella Baja (ruptur tendon quadriceps)."
    ],
    management: [
      "IGD: Knee immobilizer dalam ekstensi penuh, kompres es, rujuk Sp.OT (MRI bila meragukan antara robekan parsial vs komplit).",
      "Definitif (Robekan Komplit): Primary Surgical Repair dini (<2 minggu) menggunakan transosseous patellar tunnels atau suture anchors untuk memulihkan mekanisme ekstensor."
    ],
    ppdsPearl: "Hafalkan pasangan kebalikan ini: >40 thn = Quadriceps Tendon → Patella BAJA (turun); <40 thn = Patellar Tendon → Patella ALTA (naik, Insall-Salvati >1.2)!",
    references: ["Miller's Review of Orthopaedics", "Rockwood & Green's Fractures in Adults"],
    quiz: {
      question: "Pria 32 tahun pemain voli merasakan bunyi 'pop' di bawah tempurung lutut saat melompat dan tidak mampu mengangkat tungkai lurus (SLR negatif). X-ray lateral menunjukkan patela tertarik tinggi ke superior (Insall-Salvati ratio 1.6). Diagnosis yang paling tepat adalah?",
      options: [
        "Quadriceps Tendon Rupture (Patella Baja)",
        "Patellar Tendon Rupture (Patella Alta)",
        "Fraktur transversal patela",
        "Ruptur Ligamen Krusiatum Anterior (ACL)"
      ],
      answerIndex: 1,
      explanation: "Usia <40 tahun, gagal SLR, dan Patella Alta (Insall-Salvati >1.2) merupakan gambaran klasik Ruptur Tendon Patela."
    }
  },
  {
    id: "case-108",
    number: 108,
    title: "Patellar Instability & Dislocation (MPFL)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Dislokasi patela hampir selalu ke arah LATERAL akibat gaya valgus + eksternal rotasi tibia saat lutut fleksi ringan (sering pada remaja perempuan dengan hiperlaksitas ligamen). Struktur penahan primer yang robek pada >90% dislokasi akut adalah Medial Patellofemoral Ligament (MPFL).",
    classification: [
      "Faktor Risiko Anatomis: Trochlear dysplasia (terpenting), Patella alta, peningkatan Q-angle, dan jarak Tibial Tubercle–Trochlear Groove (TT-TG) > 20 mm pada CT/MRI."
    ],
    redFlags: [
      "Pemeriksaan Fisik: Apprehension Test positif (pasien cemas/menahan saat patela didorong ke lateral pada fleksi 20°–30°) dan J-Sign positif (patela melompat ke lateral saat lutut mendekati ekstensi penuh).",
      "Wajib cek fragmen OSTEOKONDRAL lepas (loose body) pada X-ray Sunrise/Merchant View atau MRI — bila ada fragmen osteokondral besar intraartikular, itu merupakan indikasi operasi!"
    ],
    management: [
      "Dislokasi Akut Pertama Kali (tanpa loose body osteokondral): Reduksi tertutup (ekstensikan lutut perlahan sambil mendorong patela ke medial) → Konservatif (brace singkat + fisioterapi penguatan VMO / Vastus Medialis Obliquus & core).",
      "Dislokasi Rekuren / Ada Fragmen Osteokondral: Rekonstruksi MPFL (menggunakan gracilis/semitendinosus graft) ± Tibial Tubercle Osteotomy (Fulkerson) bila TT-TG > 20 mm."
    ],
    ppdsPearl: "Hafalkan: (1) Stabilisator primer translasi lateral patela pada fleksi 0°–30° = MPFL; (2) Batas TT-TG normal <15 mm, indikasi osteotomi tuberositas tibia = TT-TG > 20 mm!",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Struktur ligamen apakah yang merupakan stabilisator pasif primer untuk mencegah translasi lateral patela pada fleksi lutut 0°–30° dan hampir selalu robek pada dislokasi patela akut?",
      options: [
        "Medial Collateral Ligament (MCL)",
        "Medial Patellofemoral Ligament (MPFL)",
        "Lateral Retinaculum",
        "Anterior Cruciate Ligament (ACL)"
      ],
      answerIndex: 1,
      explanation: "Medial Patellofemoral Ligament (MPFL) menyumbang 50–60% gaya penahan translasi lateral patela pada awal fleksi lutut dan robek pada >90% dislokasi patela lateral akut."
    }
  },
  {
    id: "case-109",
    number: 109,
    title: "Lateral Ankle Sprain & Ottawa Ankle Rules",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 4A",
    badge: "NEW BATCH 10",
    summary: "Cedera olahraga paling sering di IGD (mekanisme inversi pada posisi plantar-fleksi). Ligamen lateral ankle robek secara berurutan dari anterior ke posterior: ATFL (tersering) → CFL → PTFL.",
    classification: [
      "Urutan Robekan Ligamen Lateral: (1) Anterior Talofibular Ligament / ATFL (paling lemah & paling sering, diuji dengan Anterior Drawer Test), (2) Calcaneofibular Ligament / CFL (diuji dengan Talar Tilt Test), (3) Posterior Talofibular Ligament / PTFL (paling kuat)."
    ],
    redFlags: [
      "OTTAWA ANKLE RULES (Indikasi Wajib X-ray Ankle — sensitivitas ~98%): Nyeri di zona maleolus + (1) Nyeri tekan tepi posterior/ujung 6 cm distal maleolus lateralis ATAU medialis, ATAU (2) Ketidakmampuan menumpu beban (4 langkah) segera & di IGD.",
      "Ottawa Foot Rules (X-ray Kaki): Nyeri midfoot + nyeri tekan basis metatarsal ke-5 atau os navikulare, ATAU gagal jalan 4 langkah."
    ],
    management: [
      "Akut (Grade I–III): Functional Rehabilitation (PRICE/PEACE & LOVE, lace-up ankle brace/aircast, weight-bearing dini sesuai toleransi, dan latihan propriosepsi/peroneal strengthening) — JANGAN dipasang gips jangka panjang!",
      "Chronic Lateral Ankle Instability (gagal rehab >3–6 bulan): Modified Broström-Gould Procedure (repair anatomis ATFL/CFL + penguatan dengan inferior extensor retinaculum)."
    ],
    ppdsPearl: "Kompetensi SKDI 4A! Hafalkan: (1) Ligamen tersering robek = ATFL; (2) Kriteria Ottawa Ankle Rules; (3) Operasi gold standard instabilitas kronik = Modified Broström-Gould Procedure!",
    references: ["Ottawa Ankle Rules (Stiell et al.)", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Ligamen pergelangan kaki manakah yang paling lemah dan paling pertama mengalami robekan pada cedera inversi ankle (Lateral Ankle Sprain), serta prosedur bedah standar bila terjadi instabilitas kronik?",
      options: [
        "Deltoid ligament; Triple arthrodesis",
        "Anterior Talofibular Ligament (ATFL); Modified Broström-Gould procedure",
        "Posterior Talofibular Ligament (PTFL); Evans osteotomy",
        "Ligamen Lisfranc; ORIF bridge plate"
      ],
      answerIndex: 1,
      explanation: "ATFL adalah ligamen lateral paling lemah yang menahan inversi saat plantar-fleksi. Jika terjadi instabilitas kronik yang gagal fisioterapi, Modified Broström-Gould adalah gold standard."
    }
  },
  {
    id: "case-110",
    number: 110,
    title: "Morton's Neuroma & Hallux Rigidus",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Dua penyebab nyeri forefoot kronik yang sangat sering di praktik klinis. Morton's Neuroma adalah fibrosis perineural (BUKAN tumor sejati) nervus digitalis plantaris komunis akibat kompresi di bawah ligamen intermetatarsal transversum profunda, paling sering di CELAH KE-3 (antara M3–M4).",
    classification: [
      "Morton's Neuroma: Nyeri terbakar/kesemutan menjalar ke jari ke-3 & ke-4 ('seperti menginjak kerikil/kaus kaki terlipat'), memburuk dengan sepatu sempit/hak tinggi. Tanda klasik: Mulder's Click (+ saat metatarsal diremas bersamaan).",
      "Hallux Rigidus: Osteoartritis degeneratif sendi MTP-1 (osteoartritis kaki tersering!). Ditandai nyeri & keterbatasan DORSOFLEKSI ibu jari kaki serta osteofit dorsal menonjol."
    ],
    redFlags: [
      "Jangan keliru: Morton's Neuroma paling sering di 3rd Web Space (antara M3–M4) karena nervus digitalis di sana menerima cabang ganda dari n. plantaris medialis dan lateralis sehingga lebih tebal dan mudah terjepit!"
    ],
    management: [
      "Morton's Neuroma: Lini pertama = sepatu toe-box lebar + metatarsal pad (di proksimal kaput metatarsal) + injeksi steroid/anestesi. Refrakter = Neurektomi (pendekatan dorsal).",
      "Hallux Rigidus: Lini pertama = sepatu bersol kaku (stiff-soled shoe / Morton's extension / rocker-bottom sole). Operatif: Ringan–Sedang = Dorsal Cheilectomy (eksisi osteofit dorsal); Berat (bone-on-bone) = MTP-1 Arthrodesis (gold standard!)."
    ],
    ppdsPearl: "Hafalkan: (1) Morton's Neuroma = 3rd web space (M3–M4) + Mulder's Click (+); (2) Hallux Rigidus berat = MTP-1 Arthrodesis (ringan = Cheilectomy)!",
    references: ["Miller's Review of Orthopaedics", "Mann's Surgery of the Foot and Ankle"],
    quiz: {
      question: "Wanita 45 tahun mengeluh nyeri terbakar di telapak kaki depan yang menjalar ke jari ke-3 dan ke-4 seperti menginjak kerikil, disertai bunyi 'klik' nyeri saat kaput metatarsal diremas (Mulder's click positif). Lokasi paling sering kondisi ini adalah?",
      options: [
        "Celah intermetatarsal ke-1 (antara M1–M2)",
        "Celah intermetatarsal ke-3 (antara M3–M4)",
        "Di belakang maleolus medialis",
        "Pada tuberkulum medial kalkaneus"
      ],
      answerIndex: 1,
      explanation: "Morton's Neuroma paling sering terjadi pada celah intermetatarsal ke-3 (antara metatarsal ke-3 dan ke-4) dan menimbulkan Mulder's click positif saat kompresi lateral metatarsal."
    }
  },
  {
    id: "case-111",
    number: 111,
    title: "Non-Accidental Injury (NAI / Child Abuse)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 10",
    summary: "Kekerasan fisik pada anak yang wajib dikenali dokter IGD dan residen ortopedi karena 30–50% anak yang dipulangkan tanpa intervensi akan kembali dengan cedera lebih berat atau fatal. Fraktur adalah manifestasi tersering kedua setelah memar kulit.",
    classification: [
      "Fraktur Spesifisitas TINGGI (Hampir Patognomonik NAI): (1) Classic Metaphyseal Lesion (CML / 'Corner Fracture' / 'Bucket-Handle Fracture'), (2) Fraktur Iga Posterior, (3) Fraktur Skapula / Sternum / Prosesus Spinosus.",
      "Fraktur Spesifisitas SEDANG: Fraktur multipel dalam BERBAGAI TAHAP PENYEMBUHAN (different stages of healing), fraktur femur/humerus pada bayi BELUM BISA BERJALAN (non-ambulatory <1 tahun)."
    ],
    redFlags: [
      "Tanda Bahaya Anamnesis: Riwayat trauma tidak sesuai dengan beratnya fraktur atau tahap perkembangan anak (mis. 'bayi 3 bulan berguling sendiri dari kasur'), keterlambatan berobat, atau keterangan orang tua berubah-ubah.",
      "Diagnosis banding medis wajib disingkirkan: Osteogenesis Imperfecta (sklera biru, Wormian bones), Rickets, dan gangguan koagulasi."
    ],
    management: [
      "IGD (Wajib Dilakukan): Stabilisasi cedera anak, lakukan SKELETAL SURVEY lengkap (pada anak <2 tahun) untuk mencari fraktur tersembunyi/lama, foto dokumentasi klinis, rawat inap demi keamanan anak, dan laporkan ke tim perlindungan anak / pekerja sosial sesuai hukum!"
    ],
    ppdsPearl: "Hafalkan 2 fraktur paling spesifik untuk Child Abuse: (1) Classic Metaphyseal Lesion (Corner / Bucket-Handle Fracture) akibat guncangan/tarikan keras; (2) Fraktur Iga Posterior akibat meremas dada bayi!",
    references: ["Rockwood & Wilkins' Fractures in Children", "AAP Clinical Report: Evaluating Children With Fractures for Child Physical Abuse"],
    quiz: {
      question: "Bayi usia 6 bulan (belum bisa berjalan) dibawa orang tuanya ke IGD karena kaki kanan bengkak. Skeletal survey menunjukkan adanya 'corner/bucket-handle fracture' di metafisis tibia distal serta fraktur iga posterior yang sudah membentuk kalus. Temuan tersebut paling spesifik untuk?",
      options: [
        "Toddler's fracture fisiologis",
        "Non-Accidental Injury (Child Abuse)",
        "Blount disease infantile",
        "Legg-Calvé-Perthes disease"
      ],
      answerIndex: 1,
      explanation: "Corner/bucket-handle fracture (Classic Metaphyseal Lesion) dan fraktur iga posterior dalam tahap penyembuhan berbeda memiliki spesifisitas sangat tinggi untuk Non-Accidental Injury (Child Abuse)."
    }
  },
  {
    id: "case-112",
    number: 112,
    title: "Pediatric Forearm Fractures (Greenstick, Torus & Plastic)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 10",
    summary: "Tulang anak memiliki periosteum tebal dan elastisitas tinggi sehingga menghasilkan pola fraktur inkomplit yang unik serta potensi remodeling yang besar (terutama di dekat fisis distal yang menyumbang 75–80% pertumbuhan panjang lengan bawah!).",
    classification: [
      "Torus (Buckle) Fracture: Kompresi satu sisi korteks di metafisis distal — SANGAT STABIL!",
      "Greenstick Fracture: Satu sisi korteks patah (sisi tensi), sisi sebaliknya hanya bengkok (sisi kompresi).",
      "Plastic Deformation (Bowing): Pembengkokan tulang tanpa garis fraktur yang tampak."
    ],
    redFlags: [
      "Prinsip Remodeling Anak: Remodeling terjadi paling baik bila (1) masih banyak sisa pertumbuhan (>2 tahun), (2) dekat dengan fisis yang aktif (distal radius), dan (3) deformitas SEBIDANG dengan gerak sendi (fleksi-ekstensi). ROTASI (malrotasi) TIDAK BISA mengalami remodeling!"
    ],
    management: [
      "Torus (Buckle) Fracture: Cukup removable wrist splint selama 3 minggu (tidak perlu reduksi, tidak perlu gips sirkular, tidak perlu X-ray ulang rutin!).",
      "Both-Bone Forearm Anak: Mayoritas berhasil dengan Reduksi Tertutup + Long Arm Cast (batas toleransi diafisis: anak <8–10 thn = angulasi <15°–20°; anak >10 thn = <10°). Jika gagal reduksi / tidak stabil / usia mendekati dewasa → Elastic Stable Intramedullary Nail (ESIN / TENS) atau ORIF plate."
    ],
    ppdsPearl: "Hafalkan: (1) Fisis radius distal menyumbang 75–80% pertumbuhan lengan bawah; (2) Deformitas ROTASI tidak pernah bisa remodeling; (3) Buckle/Torus fracture cukup pakai removable splint!",
    references: ["Rockwood & Wilkins' Fractures in Children", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Anak usia 6 tahun jatuh bertumpu tangan dan foto X-ray menunjukkan Torus (Buckle) Fracture pada metafisis radius distal tanpa angulasi bermakna. Tatalaksana berbasis bukti yang paling tepat adalah?",
      options: [
        "ORIF dengan volar locking plate",
        "Removable wrist splint selama 3 minggu tanpa perlu reduksi atau X-ray serial rutin",
        "Long arm cast di atas siku selama 8 minggu",
        "Fiksasi K-wire perkutan di ruang operasi"
      ],
      answerIndex: 1,
      explanation: "Torus (buckle) fracture bersifat sangat stabil. Uji klinis membuktikan removable wrist splint selama 3 minggu memberikan hasil fungsional lebih baik dan lebih nyaman dibanding gips sirkular."
    }
  },
  {
    id: "case-113",
    number: 113,
    title: "Pediatric Femoral Shaft Fracture (Age-Based Algorithm)",
    category: "Pediatric Orthopaedics",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 10",
    summary: "Fraktur diafisis femur anak memiliki algoritma tatalaksana yang SANGAT KLASIK dan hampir selalu diujikan berdasarkan kelompok USIA dan berat badan pasien (Pedoman AAOS).",
    classification: [
      "Algoritma AAOS Berdasarkan Usia (Wajib Hafal!):",
      "• 0 – 6 bulan: PAVLIK HARNESS (mudah, bersih, cepat menyatu dalam 3–4 minggu).",
      "• 6 bulan – 5 tahun: Immediate HIP SPICA CAST (bila shortening awal < 2 cm).",
      "• 5 – 11 tahun (BB < 49 kg, fraktur panjang-stabil): Flexible / Elastic Intramedullary Nails (TENS / Titanium Elastic Nails).",
      "• > 11 tahun (atau BB > 49 kg): Rigid Lateral-Entry Trochanteric Antegrade IM Nail!"
    ],
    redFlags: [
      "JEBAKAN FATAL ANATOMI ANAK: Pada remaja dengan fisis masih terbuka, JANGAN PERNAH memasukkan Rigid IM Nail melalui Fossa Piriformis! Hal itu mencederai cabang arteri Medial Femoral Circumflex (MFCA) dan menyebabkan AVN kaput femoris! Gunakan LATERAL TROCHANTERIC ENTRY!",
      "Fenomena Overgrowth: Pada anak usia 2–10 tahun, fraktur femur memicu pertumbuhan berlebih 1–2 cm, sehingga sedikit bayonet apposition (pemendekan 1–1.5 cm) di dalam spica cast justru dapat diterima!"
    ],
    management: [
      "IGD: Evaluasi ATLS, singkirkan Child Abuse pada bayi <1 tahun (belum berjalan!), analgetik, skin traction sementara.",
      "Definitif: Sesuaikan dengan algoritma usia di atas; pada fraktur kominutif/panjang-tidak-stabil usia 5–11 tahun → Submuscular Bridge Plating."
    ],
    ppdsPearl: "Hafalkan tangga usia AAOS: <6 bln = Pavlik; 6 bln–5 thn = Spica Cast; 5–11 thn = TENS; >11 thn = Rigid Nail via LATERAL TROCHANTERIC entry (HINDARI Piriformis fossa karena risiko AVN MFCA)!",
    references: ["AAOS Clinical Practice Guideline: Pediatric Diaphyseal Femur Fractures", "Rockwood & Wilkins' Fractures in Children"],
    quiz: {
      question: "Remaja laki-laki 13 tahun (BB 55 kg, fisis masih terbuka) mengalami fraktur diafisis femur kanan. Jika direncanakan pemasangan Rigid Antegrade Intramedullary Nail, titik masuk (entry point) manakah yang WAJIB dipilih untuk menghindari Avascular Necrosis (AVN) kaput femoris?",
      options: [
        "Fossa piriformis",
        "Lateral trochanteric entry (puncak/lateral trokanter mayor)",
        "Trokanter minor",
        "Melalui fisis femur distal"
      ],
      answerIndex: 1,
      explanation: "Titik masuk melalui fossa piriformis pada anak/remaja berisiko tinggi merusak cabang asendens Medial Femoral Circumflex Artery (MFCA) yang menyebabkan AVN kaput femoris. Oleh karena itu wajib menggunakan lateral trochanteric entry."
    }
  }
]);
