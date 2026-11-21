// Ortho-Learn — Batch 5: Tumor, Sports, Infection & Basic Science (Case 57–66)
// Referensi: Miller's Review of Orthopaedics, Enneking Musculoskeletal Tumor Surgery, AO Principles of Fracture Management.

window.registerOrthoCases && window.registerOrthoCases([
  {
    id: "case-57",
    number: 57,
    title: "Chondrosarcoma",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 2",
    badge: "NEW BATCH 5",
    summary: "Tumor ganas tulang primer pembentuk kartilago; merupakan keganasan tulang primer tersering kedua pada dewasa (usia >40–50 tahun) setelah Multiple Myeloma. Lokasi predileksi utama adalah pelvis, femur proksimal, dan humerus proksimal.",
    classification: [
      "Primer (de novo) vs Sekunder (transformasi ganas dari osteokondroma atau enkondroma multipel).",
      "Grading Histologis (Grade 1–3) + Varian Dedifferentiated (sangat agresif, prognosis terburuk)."
    ],
    redFlags: [
      "Radiologi klasik: Kalsifikasi matriks kartilago berbentuk 'rings-and-arcs' atau 'popcorn', disertai endosteal scalloping dalam (>2/3 ketebalan korteks), destruksi korteks, dan massa jaringan lunak.",
      "Nyeri tumpul persisten terutama malam hari pada lesi kartilago dewasa adalah tanda bahaya transformasi ganas!"
    ],
    management: [
      "Staging (Enneking): X-ray, MRI lokal dengan kontras, CT-Scan Toraks (metastasis paru), dan Core Needle Biopsy (jalur biopsi HARUS direncanakan oleh ahli bedah onkologi ortopedi agar dapat dieksisi saat operasi definitif).",
      "Definitif: Wide Surgical Resection (eksisi luas dengan margin bebas tumor) adalah SATU-SATUNYA terapi kuratif utama.",
      "Prinsip Kritis: Chondrosarcoma RESISTEN terhadap kemoterapi dan radioterapi konvensional!"
    ],
    ppdsPearl: "Hafalan wajib ujian onkologi ortopedi: Chondrosarcoma adalah tumor ganas yang TIDAK responsif terhadap kemoterapi maupun radioterapi — terapi utamanya adalah Wide Surgical Excision!",
    references: ["Miller's Review of Orthopaedics", "NCCN Guidelines: Bone Cancer"],
    quiz: {
      question: "Pria 56 tahun datang dengan nyeri panggul kanan progresif selama 6 bulan. X-ray dan CT-Scan menunjukkan lesi litik destruktif di ilium dengan kalsifikasi matriks 'rings-and-arcs' dan massa jaringan lunak. Biopsi mengonfirmasi Chondrosarcoma Grade 2. Modalitas terapi utama yang paling tepat adalah?",
      options: [
        "Kemoterapi neoadjuvan diikuti radioterapi definitif",
        "Wide surgical resection (eksisi luas dengan margin bebas tumor)",
        "Kuretase intralesional dan bone grafting saja",
        "Radioterapi paliatif dosis rendah tanpa operasi"
      ],
      answerIndex: 1,
      explanation: "Chondrosarcoma konvensional bersifat resisten terhadap kemoterapi dan radioterapi, sehingga wide surgical resection merupakan satu-satunya modalitas terapi kuratif utama."
    }
  },
  {
    id: "case-58",
    number: 58,
    title: "Multiple Myeloma & Plasmacytoma",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 2",
    badge: "NEW BATCH 5",
    summary: "Keganasan sel plasma sumsum tulang dan merupakan keganasan tulang primer PALING SERING pada orang dewasa (>50 tahun). Ditandai proliferasi klonal sel plasma yang memproduksi imunoglobulin monoklonal (M-protein) dan mengaktifkan osteoklas secara masif.",
    classification: [
      "Kriteria CRAB: hyperCalcemia, Renal insufficiency, Anemia, Bone lesions (lesi litik).",
      "Solitary Plasmacytoma (lesi tunggal) vs Multiple Myeloma (multipel/sistemik)."
    ],
    redFlags: [
      "Jebakan Radiologi Klasik: Lesi Multiple Myeloma tampak 'COLD' (negatif palsu) pada Technetium-99m Bone Scan karena tidak ada aktivitas osteoblastik (murni osteolitik)! Gunakan Skeletal Survey, Whole-Body Low-Dose CT, atau MRI.",
      "Mirels' Score ≥ 9 pada tulang panjang (femur/humerus) menunjukkan risiko tinggi fraktur patologis → indikasi fiksasi profilaksis!"
    ],
    management: [
      "Diagnostik: Serum/Urine Protein Electrophoresis (SPEP/UPEP — M-spike), Bence-Jones protein, free light chain ratio, biopsi sumsum tulang (>10% sel plasma klonal).",
      "Sistemik: Kemoterapi/imunoterapi (bortezomib, lenalidomide, deksametason), bifosfonat IV (zoledronic acid) untuk menekan resorpsi tulang, dan radioterapi (sangat radiosensitif!).",
      "Ortopedi: Fiksasi profilaksis atau stabilisasi fraktur patologis (IMN / arthroplasty dengan semen) + radioterapi pasca-op."
    ],
    ppdsPearl: "Dua hafalan wajib: (1) Bone scan Tc-99m sering NEGATIF (cold) pada Multiple Myeloma — gunakan Skeletal Survey/MRI; (2) Mirels' Score ≥ 9 = indikasi fiksasi profilaksis pada lesi metastatik/myeloma tulang panjang.",
    references: ["Miller's Review of Orthopaedics", "International Myeloma Working Group (IMWG) Criteria"],
    quiz: {
      question: "Mengapa pemeriksaan Technetium-99m (Tc-99m) Bone Scan sering memberikan hasil negatif palsu ('cold lesion') pada pasien Multiple Myeloma?",
      options: [
        "Karena tumor hanya menyerang jaringan lunak",
        "Karena lesi bersifat murni osteolitik tanpa respons pembentukan tulang baru (osteoblastik)",
        "Karena kadar kalsium darah yang terlalu rendah",
        "Karena ukuran lesi selalu di bawah 5 mm"
      ],
      answerIndex: 1,
      explanation: "Bone scan Tc-99m mendeteksi aktivitas osteoblastik (pembentukan tulang reaktif). Pada Multiple Myeloma, aktivitas osteoklas sangat dominan sementara osteoblas tertekan, sehingga lesi 'punched-out' tidak menyerap radioisotop."
    }
  },
  {
    id: "case-59",
    number: 59,
    title: "Enchondroma vs Low-Grade Chondrosarcoma",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 2",
    badge: "NEW BATCH 5",
    summary: "Enchondroma adalah tumor kartilago jinak intrameduler yang merupakan tumor tulang primer PALING SERING di tulang tangan (falang & metakarpal). Umumnya asimtomatik dan ditemukan tidak sengaja (incidentaloma), namun dapat menimbulkan fraktur patologis.",
    classification: [
      "Ollier Disease: Enkondromatosis multipel (non-herediter, risiko transformasi ganas ~25–30%).",
      "Maffucci Syndrome: Enkondromatosis multipel + Hemangioma jaringan lunak (risiko transformasi ganas paling tinggi, hingga >50%, termasuk keganasan viseral)."
    ],
    redFlags: [
      "Tanda bahaya transformasi menjadi Chondrosarcoma: Nyeri istirahat/malam hari tanpa fraktur, endosteal scalloping >2/3 ketebalan korteks, penebalan/destruksi korteks, dan massa jaringan lunak pada MRI.",
      "Lesi kartilago di tulang panjang proksimal/pelvis jauh lebih berisiko ganas dibanding di tulang kecil tangan/kaki."
    ],
    management: [
      "Enchondroma Asimtomatik (tulang panjang/tangan): Observasi dengan foto X-ray berkala.",
      "Fraktur Patologis di Tangan: Biarkan fraktur menyatu dulu (splinting), lalu lakukan kuretase intralesional + bone grafting setelah fraktur sembuh (angka kekambuhan sangat rendah).",
      "Curiga Low-Grade Chondrosarcoma: Rujuk konsultan onkologi ortopedi untuk MRI, biopsi, dan kuretase luas dengan adjuvan lokal (fenol/cryotherapy/semen) atau reseksi luas."
    ],
    ppdsPearl: "Bedakan sindrom enkondromatosis: Ollier = enkondroma multipel saja; Maffucci = enkondroma multipel + hemangioma (flebolit di X-ray) dengan risiko keganasan tertinggi!",
    references: ["Miller's Review of Orthopaedics", "Tachdjian's Pediatric Orthopaedics"],
    quiz: {
      question: "Sindrom manakah yang ditandai oleh enkondroma multipel disertai hemangioma jaringan lunak dan memiliki risiko transformasi ganas (chondrosarcoma) paling tinggi?",
      options: [
        "Ollier Disease",
        "Maffucci Syndrome",
        "McCune-Albright Syndrome",
        "Gardner Syndrome"
      ],
      answerIndex: 1,
      explanation: "Maffucci Syndrome adalah kombinasi enkondromatosis multipel dengan hemangioma jaringan lunak (sering tampak flebolit pada X-ray) dan membawa risiko transformasi ganas tertinggi."
    }
  },
  {
    id: "case-60",
    number: 60,
    title: "Osteoid Osteoma",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 2",
    badge: "NEW BATCH 5",
    summary: "Tumor jinak pembentuk tulang (bone-forming) dengan nidus radiolusen berukuran < 2 cm yang dikelilingi sklerosis kortikal reaktif tebal. Klasik pada remaja/dewasa muda usia 10–25 tahun (laki-laki > perempuan), tersering di korteks diafisis femur proksimal dan tibia.",
    classification: [
      "Osteoid Osteoma: Nidus < 2 cm, nyeri malam hebat membaik dengan NSAID, pertumbuhan terbatas (self-limiting).",
      "Osteoblastoma: Nidus > 2 cm, predileksi elemen posterior vertebra, kurang responsif terhadap NSAID, dapat progresif/agresif lokal."
    ],
    redFlags: [
      "Gejala Patognomonik: Nyeri tulang hebat terutama MALAM HARI yang membaik secara dramatis dalam 20–30 menit setelah minum NSAID/Aspirin (akibat produksi Prostaglandin E2 / PGE2 yang sangat tinggi di dalam nidus).",
      "Pada tulang belakang, dapat menyebabkan painful scoliosis (skoliosis nyeri) dengan tumor berada di sisi KONKAF puncak kurva!"
    ],
    management: [
      "Imaging Terbaik: CT-Scan potongan tipis (thin-cut CT) adalah gold standard untuk memvisualisasikan nidus sentral < 2 cm.",
      "Konservatif: Terapi NSAID (pada sebagian pasien gejala dapat mereda spontan dalam beberapa tahun).",
      "Definitif (Gold Standard): CT-Guided Radiofrequency Ablation (RFA) — minimal invasif dengan angka keberhasilan >90% (hindari RFA jika nidus berjarak <1.5 cm dari struktur neurovaskular/medula spinalis)."
    ],
    ppdsPearl: "Tiga kata kunci Osteoid Osteoma: (1) Nidus <2 cm + sklerosis tebal; (2) Nyeri malam hilang dengan NSAID (mediasi PGE2); (3) Gold standard terapi = CT-Guided Radiofrequency Ablation (RFA).",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Remaja laki-laki 17 tahun mengeluh nyeri paha kanan yang sangat mengganggu setiap malam namun langsung hilang setelah minum ibuprofen. CT-Scan menunjukkan nidus radiolusen berdiameter 1 cm di korteks femur proksimal dikelilingi zona sklerosis tebal. Tatalaksana definitif pilihan utama (gold standard) saat ini adalah?",
      options: [
        "Reseksi blok tulang luas dan megaprosthesis",
        "CT-Guided Radiofrequency Ablation (RFA)",
        "Kemoterapi sistemik",
        "Radioterapi eksternal"
      ],
      answerIndex: 1,
      explanation: "CT-Guided Radiofrequency Ablation (RFA) adalah terapi pilihan utama untuk Osteoid Osteoma karena minimal invasif, angka keberhasilan >90%, dan pemulihan cepat."
    }
  },
  {
    id: "case-61",
    number: 61,
    title: "Chronic Osteomyelitis (Sequestrum & Involucrum)",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 5",
    summary: "Infeksi tulang kronik yang ditandai adanya tulang nekrotik avaskular (sequestrum), pembentukan tulang reaktif baru di sekelilingnya (involucrum), dan saluran sinus (cloaca) yang mengeluarkan pus menahun. Patogen tersering adalah Staphylococcus aureus (membentuk biofilm).",
    classification: [
      "Cierny-Mader Anatomis: Stage 1 (Medullary), Stage 2 (Superficial), Stage 3 (Localized), Stage 4 (Diffuse — tidak stabil secara mekanik).",
      "Cierny-Mader Host: Host A (Normal), Host B (Kompromais lokal/sistemik: DM, perokok, PVD), Host C (Terapi bedah lebih berisiko daripada penyakitnya sendiri)."
    ],
    redFlags: [
      "Marjolin's Ulcer: Transformasi ganas menjadi Squamous Cell Carcinoma (SCC) pada tepi sinus kronik yang tidak sembuh bertahun-tahun (terjadi pada ~1% kasus osteomielitis kronik) → WAJIB biopsi tepi sinus yang berubah/mudah berdarah!",
      "Antibiotik saja TIDAK PERNAH bisa menyembuhkan osteomielitis kronik karena antibiotik tidak dapat menembus tulang mati (sequestrum) dan biofilm."
    ],
    management: [
      "Diagnostik: Kultur jaringan tulang dalam (deep bone biopsy) saat debridemen — JANGAN gunakan swab permukaan sinus karena hanya menggambarkan flora kolonisasi kulit!",
      "Definitif (Prinsip Bedah): Radical Debridement ('Paprika Sign' — tulang sehat yang berdarah bintik-bintik), Sequestrectomy, manajemen dead space (antibiotic-loaded PMMA beads / Masquelet induced membrane), stabilisasi tulang (Ex-Fix), penutupan jaringan lunak, dan antibiotik spesifik kultur selama 6 minggu."
    ],
    ppdsPearl: "Hafalkan 4 istilah wajib: Sequestrum (tulang mati), Involucrum (tulang baru pembungkus), Cloaca (lubang keluar pus), dan Marjolin's Ulcer (SCC pada sinus kronik). Kultur WAJIB dari biopsi tulang dalam, bukan swab!",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Pria 48 tahun dengan riwayat osteomielitis kronik tibia selama 15 tahun datang karena tepi luka sinusnya membesar, menebal, dan mudah berdarah dalam 6 bulan terakhir. Komplikasi ganas apakah yang wajib disingkirkan dengan biopsi?",
      options: [
        "Osteosarcoma",
        "Squamous Cell Carcinoma (Marjolin's Ulcer)",
        "Ewing Sarcoma",
        "Synovial Sarcoma"
      ],
      answerIndex: 1,
      explanation: "Inflamasi kronik menahun pada traktus sinus osteomielitis dapat memicu transformasi ganas menjadi Squamous Cell Carcinoma (Marjolin's Ulcer)."
    }
  },
  {
    id: "case-62",
    number: 62,
    title: "Necrotizing Fasciitis (LRINEC Score)",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 5",
    summary: "Infeksi jaringan lunak fulminan yang menyebar cepat sepanjang bidang fasia dengan mortalitas 20–40%. Merupakan EMERGENSI BEDAH ABSOLUT ('Time is Life and Limb').",
    classification: [
      "Tipe I (Polimikrobial — 70–80%): Aerob + Anaerob, klasik pada pasien DM, imunokompromais, atau Fournier gangrene.",
      "Tipe II (Monomikrobial): Group A Beta-Hemolytic Streptococcus (S. pyogenes) atau MRSA, dapat menyerang pasien muda sehat.",
      "Tipe III: Vibrio vulnificus (paparan air laut/seafood) atau Aeromonas (air tawar)."
    ],
    redFlags: [
      "Tanda Klinis Kunci: 'Pain out of proportion' (nyeri hebat melebihi tampilan kulit), eritema menyebar cepat (tandai batas dengan spidol!), bula hemoragik, krepitasi subkutan (gas), anestesi kulit, dan syok septik.",
      "LRINEC Score (CRP, Leukosit, Hb, Natrium, Kreatinin, Glukosa): Skor ≥ 6 curiga, ≥ 8 risiko tinggi. PENTING: Skor LRINEC rendah TIDAK menyingkirkan diagnosis bila klinis sangat curiga — JANGAN tunda operasi demi menunggu CT/MRI!"
    ],
    management: [
      "IGD (Resusitasi Agresif): Stabilisasi hemodinamik + Antibiotik empiris spektrum luas IV SEGERA: Vancomycin (MRSA) + Piperacillin-Tazobactam/Meropenem (Gram negatif/anaerob) + CLINDAMYCIN (kritis untuk menghambat sintesis toksin/exotoxin bakteri!).",
      "Definitif (Emergensi Mutlak): Radical Surgical Debridement SEGERA ('finger test' positif, cairan keruh 'dishwater fluid'), dengan evaluasi ulang/second-look debridement di ruang operasi 24–48 jam kemudian."
    ],
    ppdsPearl: "Mengapa Clindamycin WAJIB ditambahkan pada antibiotik empiris Necrotizing Fasciitis? Karena Clindamycin bekerja pada ribosom 50S untuk menghentikan produksi eksotoksin bakteri (antitoxin effect)!",
    references: ["IDSA Guidelines: Skin and Soft Tissue Infections", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Selain debridemen bedah radikal segera dan antibiotik spektrum luas (Vancomycin + Meropenem), antibiotik tambahan apakah yang wajib diberikan pada Necrotizing Fasciitis karena efek inhibisi produksi eksotoksinnya?",
      options: [
        "Gentamicin",
        "Clindamycin",
        "Ciprofloxacin",
        "Cefazolin"
      ],
      answerIndex: 1,
      explanation: "Clindamycin menghambat sintesis protein bakteri (subunit ribosom 50S) sehingga secara langsung menekan produksi eksotoksin dan sitokin inflamasi pada Necrotizing Fasciitis."
    }
  },
  {
    id: "case-63",
    number: 63,
    title: "Rotator Cuff Tear",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 5",
    summary: "Robekan tendon otot rotator cuff (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis — SITS) yang menyebabkan nyeri bahu lateral (terutama malam hari saat tidur miring) dan kelemahan abduksi/rotasi. Tendon SUPRASPINATUS paling sering robek di area hipovaskular ('critical zone' 1 cm proksimal tuberkulum mayor).",
    classification: [
      "Partial-thickness (articular-sided tersering pada atlet, bursal-sided, intratendinous) vs Full-thickness tear.",
      "Goutallier Classification (MRI): Menilai degenerasi lemak (fatty infiltration) otot cuff (Grade 0–4; Grade 3–4 menandakan robekan kronik ireparabel)."
    ],
    redFlags: [
      "Pemeriksaan Fisik Spesifik: Supraspinatus = Empty Can (Jobe) Test & Drop Arm Test; Subscapularis = Lift-Off Test & Belly-Press Test; Infraspinatus/Teres Minor = External Rotation Lag Sign & Hornblower's Sign.",
      "Pseudoparalysis (tidak mampu elevasi aktif bahu >90° padahal ROM pasif penuh) pada lansia dengan migrasi superior kaput humerus (Acromiohumeral Interval < 7 mm) menandakan Cuff Tear Arthropathy."
    ],
    management: [
      "Robekan Degeneratif Kronik / Partial: Konservatif dulu 3–6 bulan (NSAID, fisioterapi penguatan periskapular & deltoid, injeksi kortikosteroid subakromial maksimal 1–2x).",
      "Robekan Akut Traumatik Full-Thickness (terutama usia muda/aktif): Arthroscopic Rotator Cuff Repair dini (<3–6 minggu) memberikan hasil terbaik sebelum terjadi retraksi dan atrofi lemak.",
      "Cuff Tear Arthropathy (lansia, robekan masif ireparabel + artritis glenohumeral): Reverse Total Shoulder Arthroplasty (RTSA) — memindahkan pusat rotasi ke medial/inferior agar otot Deltoid mengambil alih fungsi elevasi bahu."
    ],
    ppdsPearl: "Hafalkan pasangan tes fisik otot SITS dan indikasi utama Reverse Total Shoulder Arthroplasty (RTSA) = Cuff Tear Arthropathy pada lansia dengan otot Deltoid yang masih berfungsi baik!",
    references: ["AAOS Clinical Practice Guideline: Rotator Cuff Injuries", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Wanita 72 tahun datang dengan nyeri bahu kronik dan tidak mampu mengangkat lengan aktif (pseudoparalysis). X-ray menunjukkan migrasi superior kaput humerus dengan penyempitan jarak akromiohumeral < 6 mm dan artritis sendi glenohumeral (Cuff Tear Arthropathy). Otot deltoid masih kuat. Pilihan rekonstruksi bedah terbaik adalah?",
      options: [
        "Anatomic Total Shoulder Arthroplasty",
        "Reverse Total Shoulder Arthroplasty (RTSA)",
        "Arthroscopic subacromial decompression saja",
        "Bankart repair"
      ],
      answerIndex: 1,
      explanation: "Pada Cuff Tear Arthropathy dengan robekan rotator cuff masif ireparabel, Anatomic TSA akan gagal (rocking-horse loosening). Reverse Total Shoulder Arthroplasty (RTSA) mengandalkan otot deltoid untuk elevasi bahu dan merupakan pilihan utama."
    }
  },
  {
    id: "case-64",
    number: 64,
    title: "PCL & Posterolateral Corner (PLC) Injury",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 5",
    summary: "Posterior Cruciate Ligament (PCL) adalah penahan utama translasi posterior tibia (mekanisme klasik: 'Dashboard Injury' — lutut fleksi menghantam dasbor mobil). Sering terjadi bersamaan dengan cedera Posterolateral Corner (PLC: LCL, tendon popliteus, dan ligamen popliteofibular).",
    classification: [
      "PCL Grading (Posterior Drawer pada fleksi 90°): Grade I (1–5 mm, tibia masih anterior terhadap kondilus femur), Grade II (6–10 mm, rata/flush), Grade III (>10 mm, tibia di posterior kondilus femur — hampir selalu disertai cedera PLC!)."
    ],
    redFlags: [
      "Dial Test (Paling Sering Keluar di Ujian!): Bandingkan eksternal rotasi kaki pada posisi tengkurap. Asimetri >10° hanya pada fleksi 30° = cedera PLC TERISOLASI; Asimetri >10° pada fleksi 30° DAN 90° = cedera KOMBINASI PCL + PLC!",
      "Jika cedera PLC terlewat saat merekonstruksi ACL atau PCL, graft rekonstruksi akan GAGAL (varus thrust overload)!"
    ],
    management: [
      "PCL Terisolasi Grade I–II: Konservatif! Protokol rehabilitasi fokus pada penguatan otot QUADRICEPS (agonis PCL yang menarik tibia ke anterior) dan dynamic PCL brace.",
      "PCL Grade III / Kombinasi PLC atau Multiligamen: Rekonstruksi bedah (PCL + rekonstruksi anatomis PLC secara bersamaan, idealnya dalam 2–3 minggu pertama untuk PLC akut)."
    ],
    ppdsPearl: "Aturan Emas Dial Test: 30° saja positif = PLC saja; 30° + 90° positif = PCL + PLC! Dan ingat: Rehabilitasi PCL memperkuat QUADRICEPS (sebaliknya, ACL memperkuat Hamstring).",
    references: ["Miller's Review of Orthopaedics", "Campbell's Operative Orthopaedics"],
    quiz: {
      question: "Pada pemeriksaan Dial Test seorang pasien pascatrauma lutut, didapatkan peningkatan eksternal rotasi kaki kanan sebesar 15° dibandingkan kiri pada sudut fleksi lutut 30° MAUPUN 90°. Struktur apakah yang mengalami cedera?",
      options: [
        "Posterolateral Corner (PLC) terisolasi",
        "Kombinasi Posterior Cruciate Ligament (PCL) dan Posterolateral Corner (PLC)",
        "Anterior Cruciate Ligament (ACL) terisolasi",
        "Medial Collateral Ligament (MCL) dan Meniskus Medial"
      ],
      answerIndex: 1,
      explanation: "Pada Dial Test, peningkatan eksternal rotasi >10° hanya pada 30° menunjukkan cedera PLC terisolasi, sedangkan positif pada 30° dan 90° menunjukkan cedera kombinasi PCL + PLC."
    }
  },
  {
    id: "case-65",
    number: 65,
    title: "AO Principles & Biomechanics (Absolute vs Relative Stability)",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 5",
    summary: "Fondasi mutlak ilmu fraktur yang WAJIB dikuasai setiap calon residen Orthopaedi. Pemilihan jenis fiksasi menentukan jenis stabilitas mekanik (Perren's Strain Theory) dan jalur penyembuhan tulang (Primary vs Secondary Bone Healing).",
    classification: [
      "4 Prinsip AO: (1) Reduksi fraktur & fiksasi untuk mengembalikan hubungan anatomis, (2) Stabilitas fiksasi sesuai kepribadian fraktur, (3) Preservasi suplai darah tulang & jaringan lunak, (4) Mobilisasi dini & aman.",
      "Absolute Stability (Strain < 2%): Tidak ada mikromosi → Primary (Direct/Haversian) Bone Healing TANPA KALUS. Contoh implan: Lag Screw, Compression Plate (DCP/LC-DCP), Tension Band Wiring. Indikasi: Fraktur intraartikular & fraktur diafisis simpel (mis. lengan bawah).",
      "Relative Stability (Strain 2–10%): Ada mikromosi terkontrol → Secondary (Indirect/Endochondral) Bone Healing DENGAN KALUS. Contoh implan: Intramedullary Nail (IMN), Bridge Plate, External Fixator, Cast/Splint. Indikasi: Fraktur diafisis/metafisis kominutif."
    ],
    redFlags: [
      "Jika strain > 10% (fiksasi terlalu longgar/tidak stabil) → tulang gagal menyatu dan terbentuk jaringan fibrosa (Hypertrophic Nonunion — 'elephant foot' callus).",
      "Working Length pada Plate/IMN: Semakin panjang working length (jarak antar sekrup terdekat dari garis fraktur), semakin fleksibel konstruksinya (meningkatkan mikromosi untuk memicu kalus pada fraktur kominutif)."
    ],
    management: [
      "Fraktur Intraartikular: WAJIB reduksi anatomis + Absolute Stability (lag screw / buttress plate) untuk mencegah osteoartritis pascatrauma.",
      "Fraktur Diafisis Kominutif: Reduksi fungsional (panjang, alignment, rotasi) + Relative Stability (IMN / MIPO bridge plating) untuk menjaga vaskularisasi fragmen ('biological fixation')."
    ],
    ppdsPearl: "Hafalkan pasangan ini luar kepala: Absolute Stability = Strain <2% = Primary/Direct Healing = TANPA kalus (Lag screw/Compression plate). Relative Stability = Strain 2–10% = Secondary/Endochondral Healing = DENGAN kalus (IMN/Bridge plate/Ex-Fix).",
    references: ["AO Principles of Fracture Management (3rd Edition)", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pada fraktur diafisis femur kominutif yang difiksasi menggunakan Intramedullary Nail (IMN), jenis stabilitas mekanik, rentang strain (Perren), dan pola penyembuhan tulang yang diharapkan adalah?",
      options: [
        "Absolute stability; strain < 2%; primary bone healing tanpa kalus",
        "Relative stability; strain 2–10%; secondary (endochondral) bone healing dengan pembentukan kalus",
        "Absolute stability; strain > 10%; intramembranous healing",
        "Relative stability; strain > 20%; fibrous nonunion"
      ],
      answerIndex: 1,
      explanation: "Intramedullary Nail (IMN) memberikan stabilitas relatif dengan mikromosi terkontrol (strain 2–10%), sehingga merangsang penyembuhan tulang sekunder (osifikasi endokondral) yang ditandai pembentukan kalus."
    }
  },
  {
    id: "case-66",
    number: 66,
    title: "Osteoporosis & Metabolic Bone Disease",
    category: "Tumor, Sports & Basic Science",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 5",
    summary: "Penyakit tulang metabolik tersering yang ditandai penurunan massa tulang (kuantitas berkurang, namun rasio mineralisasi:osteoid NORMAL — berbeda dengan Osteomalacia di mana mineralisasi terganggu). Menyebabkan fraktur fragilitas (hip, vertebra, distal radius).",
    classification: [
      "Kriteria WHO (DEXA Scan T-Score): Normal (≥ -1.0), Osteopenia (-1.0 s/d -2.5), Osteoporosis (≤ -2.5), Severe Osteoporosis (≤ -2.5 + riwayat fraktur fragilitas).",
      "Z-Score: Digunakan untuk membandingkan densitas tulang pada wanita premenopause, pria <50 tahun, dan anak-anak (≤ -2.0 = di bawah ekspektasi usia)."
    ],
    redFlags: [
      "Efek samping langka terapi antiresorptif jangka panjang (Bifosfonat / Denosumab): Atypical Femoral Fracture (AFF) dan Osteonecrosis of the Jaw (ONJ).",
      "Teriparatide (rekombinan PTH 1-34): HANYA bersifat anabolik bila diberikan secara INTERMITEN (injeksi harian); pemberian PTH kontinu justru menyebabkan resorpsi tulang (seperti hiperparatiroidisme)!"
    ],
    management: [
      "Dasar: Kalsium 1000–1200 mg/hari + Vitamin D 800–1000 IU/hari + latihan weight-bearing.",
      "Antiresorptif (Menghambat Osteoklas): Bifosfonat (Alendronate/Zoledronic acid — menghambat enzim farnesyl pyrophosphate synthase), Denosumab (antibodi monoklonal anti-RANKL), SERM (Raloxifene).",
      "Anabolik (Merangsang Osteoblas): Teriparatide (PTH 1-34 intermiten) atau Romosozumab (anti-sclerostin) — pilihan untuk osteoporosis sangat berat."
    ],
    ppdsPearl: "Bedakan profil lab tulang metabolik: Osteoporosis = Ca, Fosfat, ALP, PTH semuanya NORMAL! Osteomalacia = Ca rendah/N, Fosfat rendah, ALP TINGGI, PTH TINGGI (hiperparatiroid sekunder). Paget's Disease = ALP SANGAT TINGGI dengan Ca & Fosfat normal.",
    references: ["Miller's Review of Orthopaedics", "Endocrine Society Clinical Practice Guideline: Osteoporosis"],
    quiz: {
      question: "Manakah di bawah ini yang merupakan mekanisme kerja obat Denosumab dalam tata laksana osteoporosis?",
      options: [
        "Menstimulasi langsung reseptor PTH secara intermiten pada osteoblas",
        "Antibodi monoklonal yang berikatan dengan RANKL sehingga menghambat diferensiasi dan aktivitas osteoklas",
        "Menghambat enzim farnesyl pyrophosphate synthase secara langsung di dalam osteoklas",
        "Meningkatkan absorpsi kalsium usus secara langsung seperti kalsitriol"
      ],
      answerIndex: 1,
      explanation: "Denosumab adalah antibodi monoklonal manusia yang menargetkan RANKL (meniru fungsi Osteoprotegerin/OPG), sehingga mencegah aktivasi reseptor RANK pada prekursor osteoklas dan menekan resorpsi tulang."
    }
  }
]);
