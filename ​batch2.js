// Ortho-Learn — Batch 2: Lower Extremity & Foot/Ankle (Case 27–36)
// Referensi: Rockwood & Green's, Miller's Review of Orthopaedics, AO Surgery Reference, ATLS 10th Ed.

window.registerOrthoCases && window.registerOrthoCases([
  {
    id: "case-27",
    number: 27,
    title: "Intertrochanteric Femur Fracture",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur ekstrakapsular femur proksimal antara trokanter mayor dan minor. Sering pada lansia dengan osteoporosis akibat jatuh ke samping; vaskularisasi metafisis sangat baik sehingga risiko AVN sangat rendah (berbeda dengan fraktur kolum femoris).",
    classification: [
      "AO/OTA 31-A1: Pertrochanteric simple (stabil, dinding lateral utuh).",
      "AO/OTA 31-A2: Pertrochanteric multifragmentary (tidak stabil, kominusi posteromedial/calcar).",
      "AO/OTA 31-A3: Intertrochanteric reverse obliquity / subtrochanteric extension (sangat tidak stabil)."
    ],
    redFlags: [
      "Kehilangan darah tersembunyi (hidden blood loss) dapat mencapai 500–1000 mL pada lansia.",
      "Reverse obliquity (31-A3) atau lateral wall incompetent: JANGAN pakai Sliding Hip Screw (DHS) karena risiko medialisasi shaft & cut-out tinggi.",
      "Penundaan operasi >48 jam meningkatkan mortalitas 1 tahun secara signifikan."
    ],
    management: [
      "IGD: Resusitasi cairan/darah, analgesi multimodal (pertimbangkan Fascia Iliaca Compartment Block), evaluasi medis pre-op cepat, profilaksis DVT.",
      "Definitif (Stabil 31-A1): Sliding Hip Screw (DHS) atau Cephalomedullary Nail (CMN).",
      "Definitif (Tidak Stabil 31-A2/A3): Cephalomedullary Nail (PFNA/Gamma Nail).",
      "Target Radiologis Intra-op: Tip-Apex Distance (TAD) < 25 mm (AP + Lateral) untuk mencegah lag screw cut-out."
    ],
    ppdsPearl: "Penguji sangat sering menanyakan batas Tip-Apex Distance (TAD < 25 mm menurut Baumgaertner) serta perbedaan indikasi DHS vs Cephalomedullary Nail pada fraktur reverse obliquity (31-A3).",
    references: ["Rockwood & Green's Fractures in Adults", "AO Surgery Reference: Proximal Femur", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Wanita 78 tahun jatuh di kamar mandi, X-ray menunjukkan fraktur intertrokanterik dengan pola reverse obliquity (AO 31-A3). Fiksasi definitif dan target radiologis intraoperatif yang paling tepat adalah?",
      options: [
        "Dynamic Hip Screw (DHS) dengan TAD < 35 mm",
        "Cephalomedullary Nail (CMN) dengan TAD < 25 mm",
        "Hemiarthroplasty bipolar tanpa semen",
        "Cannulated cancellous screws 3 buah konfigurasi segitiga terbalik"
      ],
      answerIndex: 1,
      explanation: "Pola reverse obliquity (31-A3) tidak memiliki penyangga dinding lateral yang adekuat sehingga DHS berisiko tinggi mengalami medialisasi shaft dan gagal fiksasi. Cephalomedullary Nail (CMN) adalah pilihan utama, dengan target Tip-Apex Distance (TAD) < 25 mm untuk mencegah cut-out."
    }
  },
  {
    id: "case-28",
    number: 28,
    title: "Subtrochanteric Femur Fracture",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur yang terletak di area 5 cm distal dari trokanter minor. Memiliki stres biomekanik tertinggi di seluruh tubuh (kompresi medial, tensi lateral) dan insidensi nonunion/malunion tinggi jika reduksi tidak anatomis.",
    classification: [
      "Russell-Taylor: Berdasarkan keterlibatan fossa piriformis dan kontinuitas trokanter minor.",
      "Atypical Femoral Fracture (AFF): Fraktur transversal dengan lateral cortical thickening & medial spike pada pengguna bifosfonat jangka panjang."
    ],
    redFlags: [
      "Deforming forces klasik: Fragmen proksimal tertarik FLEKSI (iliopsoas), ABDUKSI (gluteus medius/minimus), dan EKSTERNAL ROTASI (short external rotators); fragmen distal tertarik ADDUKSI & PROKSIMAL (adduktor & hamstring).",
      "Pada pasien pengguna bifosfonat >5 tahun dengan nyeri paha prodromal, wajib foto X-ray femur kontralateral (risiko bilateral 28–40%)."
    ],
    management: [
      "IGD: Evaluasi ATLS, skin traction/Thomas splint sementara untuk kontrol nyeri dan panjang tungkai.",
      "Definitif: Long Cephalomedullary Nail (IMN) dengan reduksi anatomis (hindari malreduksi varus!).",
      "Pada AFF: Hentikan bifosfonat, suplementasi kalsium/vitamin D, pertimbangkan teriparatide, dan fiksasi profilaksis kontralateral jika ada garis fraktur inkomplit + nyeri."
    ],
    ppdsPearl: "Hafalkan 3 deforming forces fragmen proksimal (Fleksi = Iliopsoas, Abduksi = Gluteus medius/minimus, Eksternal Rotasi = Short external rotators). Malreduksi varus adalah penyebab tersering kegagalan implan di area ini.",
    references: ["Rockwood & Green's Fractures in Adults", "ASBMR Task Force on Atypical Femoral Fractures"],
    quiz: {
      question: "Pada fraktur subtrokanterik femur, otot manakah yang menyebabkan fragmen proksimal mengalami deformitas fleksi?",
      options: [
        "Gluteus medius dan minimus",
        "Iliopsoas",
        "Adductor magnus",
        "Piriformis dan obturator internus"
      ],
      answerIndex: 1,
      explanation: "Iliopsoas berinsersi di trokanter minor sehingga menarik fragmen proksimal ke arah fleksi. Gluteus medius/minimus menarik ke abduksi, sedangkan short external rotators menarik ke eksternal rotasi."
    }
  },
  {
    id: "case-29",
    number: 29,
    title: "Femoral Shaft Fracture & Fat Embolism Syndrome",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur diafisis femur akibat trauma energi tinggi pada dewasa muda. Dapat menyebabkan syok hemoragik (perdarahan 1.000–1.500 mL) dan komplikasi fatal berupa Fat Embolism Syndrome (FES) dalam 24–72 jam.",
    classification: [
      "Winquist-Hansen (Kominusi): Tipe I (<25% korteks), Tipe II (25–50%), Tipe III (50–75%), Tipe IV (>75%/segmental).",
      "Gurd's Criteria (FES): Mayor (Hipoksemia/ARDS, gangguan SSP/konfusi, petekie aksila/konjungtiva); Minor (Takikardia >110, demam >38.5°C, emboli retina, fat globules di urin/sputum, penurunan Hb/trombosit)."
    ],
    redFlags: [
      "Wajib foto X-ray Pelvis AP + Hip ipsilateral: 2–9% fraktur shaft femur disertai fraktur kolum femoris ipsilateral yang sering terlewat (missed femoral neck fracture).",
      "Trias klasik Fat Embolism Syndrome (24–72 jam pascatrauma): Hipoksemia, perubahan status mental, dan petekie."
    ],
    management: [
      "IGD (ATLS): Resusitasi kristaloid/darah, imobilisasi dengan Hare/Sager traction splint (kontraindikasi jika ada fraktur pelvis/hip/tibia ipsilateral).",
      "Definitif (Pasien Stabil): Early Total Care — Reamed Antegrade Intramedullary Nail (IMN) dalam <24 jam menurunkan risiko FES & ARDS.",
      "Definitif (Pasien Borderline/In extremis): Damage Control Orthopaedics (DCO) — External Fixation cepat dulu, konversi ke IMN setelah fisiologi stabil (hari ke-5–10)."
    ],
    ppdsPearl: "Konsep 'Second Hit Phenomenon' & Damage Control Orthopaedics (DCO): pada pasien politrauma dengan laktat >2.5–4 mmol/L, hipotermia, atau koagulopati, lakukan Ex-Fix dulu daripada reamed IMN primer.",
    references: ["ATLS 10th Edition", "Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pria 24 tahun dengan fraktur tertutup diafisis femur kanan akibat kecelakaan motor. 36 jam kemudian pasien mendadak sesak (SpO2 84%), gelisah/konfusi, takikardia 124x/m, dan tampak petekie di konjungtiva serta aksila. Diagnosis yang paling mungkin adalah?",
      options: [
        "Pulmonary Thromboembolism (PE)",
        "Fat Embolism Syndrome (FES)",
        "Tension Pneumothorax",
        "Compartment Syndrome"
      ],
      answerIndex: 1,
      explanation: "Onset 24–72 jam pascafraktur tulang panjang dengan trias klasik (hipoksemia, gangguan neurologis, dan petekie di konjungtiva/aksila) sangat khas untuk Fat Embolism Syndrome (FES) berdasarkan kriteria Gurd."
    }
  },
  {
    id: "case-30",
    number: 30,
    title: "Patella Fracture & Extensor Mechanism",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 2",
    summary: "Tulang sesamoid terbesar di tubuh yang berfungsi meningkatkan lever arm otot quadriceps hingga 30%. Evaluasi terpenting di IGD bukan hanya pola X-ray, melainkan integritas mekanisme ekstensor lutut.",
    classification: [
      "Nondisplaced vs Displaced (>3 mm diastasis atau >2 mm articular step-off).",
      "Pola: Transversal (tersering, 50–80%), Stellate/Kominutif, Vertikal (sering tidak mengganggu ekstensor), Marginal/Polar."
    ],
    redFlags: [
      "Ketidakmampuan melakukan Straight Leg Raise (SLR) menandakan robekan retinakulum medial & lateral (extensor mechanism disruption) → indikasi operasi mutlak.",
      "Bedakan dengan Bipartite Patella (varian normal): biasanya di kuadran superolateral, tepi sklerotik halus, sering bilateral."
    ],
    management: [
      "IGD: Aspirasi hemartrosis steril hanya jika nyeri hebat/tegang (bantu tes SLR dengan anestesi lokal intraartikular), imobilisasi knee immobilizer dalam ekstensi penuh.",
      "Konservatif: Jika mekanisme ekstensor intak (SLR aktif +), diastasis <3 mm, dan step-off <2 mm → hinged knee brace terkunci ekstensi 4–6 minggu dengan weight-bearing as tolerated.",
      "Definitif (Operatif): Modified Anterior Tension Band Wiring (TBW) pada fraktur transversal (mengubah gaya tensi anterior saat fleksi lutut menjadi gaya kompresi di permukaan artikular)."
    ],
    ppdsPearl: "Prinsip biomekanik Tension Band Wiring (TBW) sering keluar di ujian tulis & lisan: gaya tarikan quadriceps diubah menjadi kompresi dinamis pada sisi sendi saat lutut difleksikan.",
    references: ["AO Surgery Reference: Patella", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Prinsip biomekanik utama dari fiksasi Modified Anterior Tension Band Wiring (TBW) pada fraktur transversal patela adalah?",
      options: [
        "Memberikan stabilitas relatif agar terbentuk kalus sekunder",
        "Mengubah gaya tensi di sisi anterior menjadi gaya kompresi di permukaan artikular saat fleksi lutut",
        "Mencegah migrasi superior fragmen distal akibat tarikan tendon patela",
        "Menggantikan fungsi retinakulum medial yang robek"
      ],
      answerIndex: 1,
      explanation: "Tension Band Wiring dipasang di sisi tensi (anterior patela) sehingga saat lutut difleksikan, gaya tarik diubah menjadi gaya kompresi dinamis pada garis fraktur di sisi artikular."
    }
  },
  {
    id: "case-31",
    number: 31,
    title: "Tibial Plateau Fracture (Schatzker)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur intraartikular tibia proksimal akibat gaya aksial disertai valgus (lateral plateau) atau varus (medial plateau). Membutuhkan evaluasi jaringan lunak dan vaskular yang sangat ketat.",
    classification: [
      "Schatzker I: Pure split lateral plateau (dewasa muda, tulang kuat).",
      "Schatzker II: Split + depression lateral plateau (TERSERING secara keseluruhan).",
      "Schatzker III: Pure central depression lateral plateau (lansia/osteoporosis).",
      "Schatzker IV: Medial plateau fracture (energi tinggi, risiko cedera a. poplitea & n. peroneus!).",
      "Schatzker V: Bicondylar fracture.",
      "Schatzker VI: Bicondylar dengan disosiasi metafisis-diafisis."
    ],
    redFlags: [
      "Schatzker IV (medial plateau) ekuivalen dengan knee dislocation → wajib cek ABI (<0.9 lakukan CT-Angiografi) untuk menyingkirkan cedera arteri poplitea.",
      "Risiko tinggi Sindrom Kompartemen (terutama Schatzker V–VI) dan cedera meniskus lateral (pada Schatzker II)."
    ],
    management: [
      "IGD: Evaluasi neurovaskular serial, long leg posterior slab, elevasi tungkai, observasi kompartemen.",
      "Imaging: CT-Scan dengan rekonstruksi 3D wajib untuk pre-op planning (menilai depresi artikular).",
      "Definitif: Pada energi tinggi (Schatzker IV–VI) dengan bengkak hebat/blister → Staged Protocol: Knee-spanning External Fixator dulu, lalu ORIF (dual plating) setelah jaringan lunak tenang (wrinkle sign +)."
    ],
    ppdsPearl: "Hafalkan Schatzker I–VI! Tipe II paling sering; Tipe IV paling berbahaya terhadap arteri poplitea; Tipe V–VI wajib staged protocol (spanning Ex-Fix dulu) untuk mencegah infeksi luka operasi dan nekrosis kulit.",
    references: ["Rockwood & Green's Fractures in Adults", "AO Surgery Reference: Proximal Tibia"],
    quiz: {
      question: "Pada klasifikasi Schatzker untuk fraktur tibial plateau, tipe manakah yang merupakan ekuivalen dislokasi lutut dan memiliki risiko tertinggi mencederai arteri poplitea?",
      options: [
        "Schatzker Tipe I",
        "Schatzker Tipe II",
        "Schatzker Tipe III",
        "Schatzker Tipe IV"
      ],
      answerIndex: 3,
      explanation: "Schatzker Tipe IV melibatkan plateau medial yang umumnya disebabkan oleh trauma energi tinggi (varus/aksial) dan sering merupakan bagian dari dislokasi lutut spontan yang tereduksi, sehingga berisiko tinggi mencederai arteri poplitea dan saraf peroneus."
    }
  },
  {
    id: "case-32",
    number: 32,
    title: "Tibial Pilon (Plafond) Fracture",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur kominutif intraartikular tibia distal (atap sendi pergelangan kaki/plafond) akibat beban aksial energi tinggi (jatuh dari ketinggian, tabrakan mobil). Tantangan terbesarnya adalah soft-tissue envelope yang sangat tipis.",
    classification: [
      "Rüedi-Allgöwer Tipe I: Nondisplaced cleavage fracture plafond.",
      "Rüedi-Allgöwer Tipe II: Displaced articular fracture tanpa kominusi signifikan.",
      "Rüedi-Allgöwer Tipe III: Impaksi berat dan kominusi permukaan artikular."
    ],
    redFlags: [
      "ORIF dini pada jaringan lunak yang masih bengkak/tegang menyebabkan angka infeksi dalam dan skin sloughing hingga >30%!",
      "Fracture blisters (hemoragik menandakan kerusakan dermis lebih dalam dibanding serosa)."
    ],
    management: [
      "IGD: Reduksi kasar jika deformitas berat, splint empuk, elevasi tinggi, observasi kompartemen.",
      "Definitif (Staged Protocol — Gold Standard): Tahap 1 = Ankle-spanning External Fixator (mengembalikan panjang & alignment) + CT-Scan pasca-traksi. Tahap 2 = ORIF definitif setelah 10–14 hari saat 'Wrinkle Sign' positif (kulit mulai berkerut, bengkak reda)."
    ],
    ppdsPearl: "Kata kunci wajib ujian: 'Staged Protocol' (Spanning Ex-Fix dulu → tunggu Wrinkle Sign 10–14 hari → baru ORIF definitif). Jangan pernah langsung ORIF pada pilon bengkak!",
    references: ["Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pria 35 tahun jatuh dari atap rumah mengalami fraktur tertutup tibial pilon kanan (Rüedi-Allgöwer III) dengan bengkak masif dan fracture blister hemoragik. Tatalaksana awal yang paling tepat adalah?",
      options: [
        "ORIF emergensi dengan plate anterior dalam <6 jam",
        "Ankle-spanning External Fixator, elevasi, dan tunda ORIF hingga Wrinkle Sign positif",
        "Short leg cast dan rawat jalan",
        "Intramedullary nailing tibia segera"
      ],
      answerIndex: 1,
      explanation: "Pada fraktur pilon energi tinggi dengan gangguan soft tissue, protokol bertahap (staged protocol) dengan ankle-spanning external fixator diikuti ORIF setelah bengkak reda (wrinkle sign positif, biasanya 10–14 hari) secara drastis menurunkan komplikasi luka dan infeksi."
    }
  },
  {
    id: "case-33",
    number: 33,
    title: "Calcaneus Fracture (Böhler's Angle)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 2",
    summary: "Tulang tarsal yang paling sering mengalami fraktur (60%), klasik akibat jatuh dari ketinggian mendarat dengan tumit ('Lover's Fracture'). 75% bersifat intraartikular melibatkan sendi subtalar.",
    classification: [
      "Sanders Classification (berdasarkan potongan koronal CT-Scan pada posterior facet): Tipe I (nondisplaced), Tipe II (2 fragmen), Tipe III (3 fragmen), Tipe IV (≥4 fragmen / sangat kominutif)."
    ],
    redFlags: [
      "10% kasus disertai fraktur kompresi vertebra torakolumbal (T12–L2) dan 10% bilateral → WAJIB periksa nyeri tekan tulang belakang!",
      "Tongue-type fracture (fraktur tuberositas posterior yang tertarik tendon Achilles) → mengancam kulit tumit posterior (skin tenting/nekrosis) = EMERGENSI ORTOPEDI untuk reduksi segera!"
    ],
    management: [
      "IGD: Evaluasi tulang belakang & kaki kontralateral, cek skin tenting posterior, Jones dressing (balut tekan lembut) + elevasi.",
      "Radiologi: X-ray Lateral (ukur Böhler's Angle normal 20°–40°; menurun/mendatar pada fraktur impaksi; Crucial Angle of Gissane normal 120°–145°) + Harris axial view + CT-Scan.",
      "Definitif: Konservatif pada Sanders I atau perokok berat/DM tidak terkontrol (risiko luka tinggi). Operatif (ORIF sinus tarsi/extensile lateral setelah wrinkle sign +) pada Sanders II–III; pertimbangkan subtalar arthrodesis primer pada Sanders IV."
    ],
    ppdsPearl: "Dua hafalan wajib: (1) Böhler's Angle normal 20°–40°; (2) Tongue-type fracture dengan skin tenting di tumit posterior adalah emergensi yang butuh reduksi segera untuk menyelamatkan kulit.",
    references: ["Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Berapakah rentang normal Böhler's Angle pada foto X-ray lateral kalkaneus, dan cedera penyerta apa yang wajib selalu disingkirkan pada pasien jatuh dari ketinggian dengan fraktur kalkaneus?",
      options: [
        "10°–20°; Fraktur klavikula",
        "20°–40°; Fraktur kompresi vertebra torakolumbal",
        "45°–60°; Dislokasi bahu anterior",
        "120°–145°; Fraktur skafoid"
      ],
      answerIndex: 1,
      explanation: "Böhler's angle normal adalah 20°–40° (menurun bila terjadi impaksi faset posterior). Sekitar 10% pasien fraktur kalkaneus akibat jatuh dari ketinggian juga mengalami fraktur kompresi vertebra torakolumbal."
    }
  },
  {
    id: "case-34",
    number: 34,
    title: "Talus Neck Fracture (Hawkins)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3B",
    badge: "NEW BATCH 2",
    summary: "Fraktur kolum talus akibat dorsofleksi paksa pergelangan kaki (dulu disebut 'Aviator's Astragalus'). 60% permukaan talus tertutup kartilago tanpa insersi otot, dengan suplai darah retrograde (a. canalis tarsi dari a. tibialis posterior) sehingga sangat rentan AVN.",
    classification: [
      "Hawkins Tipe I: Nondisplaced (risiko AVN 0–13%).",
      "Hawkins Tipe II: Displaced + subluksasi/dislokasi sendi SUBTALAR (risiko AVN 20–50%).",
      "Hawkins Tipe III: Displaced + dislokasi sendi SUBTALAR & TIBIOTALAR (risiko AVN 70–100%).",
      "Hawkins Tipe IV: Displaced + dislokasi SUBTALAR, TIBIOTALAR, & TALONAVIKULAR (risiko AVN ~100%)."
    ],
    redFlags: [
      "Dislokasi sendi (Hawkins II–IV) menyebabkan kompresi kulit dan pembuluh darah → butuh reduksi tertutup segera di IGD (atau reduksi terbuka emergensi jika gagal).",
      "Malunion varus adalah komplikasi paling sering yang mengganggu fungsi (terjadi akibat kominusi kolum medial)."
    ],
    management: [
      "IGD: Reduksi segera jika ada dislokasi/skin tenting, splint netral, elevasi, CT-Scan pre-op.",
      "Definitif: Hawkins I → short leg cast non-weight bearing 6–8 minggu. Hawkins II–IV → ORIF anatomis (dual approach anteromedial & anterolateral) dengan screw/plate.",
      "Follow-up (6–8 minggu): Cari 'Hawkins Sign' (garis radiolusen subkondral di dome talus pada X-ray AP/Mortise) → TANDA BAIK (menunjukkan vaskularisasi intak & resorpsi tulang aktif, risiko AVN rendah)."
    ],
    ppdsPearl: "Jebakan klasik ujian PPDS: Hawkins Sign (radiolusensi subkondral minggu ke-6–8) adalah TANDA PROGNOSIS BAIK (revaskularisasi utuh, BUKAN tanda AVN!). Sebaliknya, sklerosis/putih pekat menandakan AVN.",
    references: ["Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pada evaluasi X-ray 7 minggu pasca-ORIF fraktur kolum talus Hawkins Tipe II, tampak garis radiolusen subkondral di dome talus (Hawkins Sign positif). Apa makna klinis temuan tersebut?",
      options: [
        "Tanda awal Avascular Necrosis (AVN) berat",
        "Tanda prognosis baik bahwa vaskularisasi talus masih intak",
        "Tanda infeksi sendi tibiotalar (septic arthritis)",
        "Tanda nonunion dan kegagalan implan"
      ],
      answerIndex: 1,
      explanation: "Hawkins Sign adalah zona radiolusen subkondral akibat hiperemia dan resorpsi tulang yang hanya bisa terjadi bila suplai darah ke korpus talus masih baik. Ini merupakan prediktor kuat bahwa pasien tidak akan mengalami AVN."
    }
  },
  {
    id: "case-35",
    number: 35,
    title: "Lisfranc Injury (Tarsometatarsal Joint)",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 2",
    summary: "Cedera kompleks sendi tarsometatarsal (TMT) yang menghubungkan midfoot dan forefoot. Sangat sering terlewat (hingga 20% misdiagnosis sebagai 'ankle/foot sprain' biasa), padahal jika tidak ditangani menyebabkan artritis midfoot kronik dan flatfoot yang melumpuhkan.",
    classification: [
      "Ligamen Lisfranc: Menghubungkan aspek plantar medial cuneiform ke basis metatarsal ke-2 (M2). Tidak ada ligamen intermetatarsal antara M1 dan M2.",
      "Pola: Homolateral vs Divergent (M1 ke medial, M2–M5 ke lateral)."
    ],
    redFlags: [
      "Plantar ecchymosis (memar di telapak kaki tengah) adalah tanda patognomonik kuat cedera Lisfranc!",
      "X-ray non-weight-bearing bisa tampak normal pada cedera ligamen murni → WAJIB Weight-Bearing X-ray bilateral (AP, Lateral, Oblique 30°) atau CT-Scan."
    ],
    management: [
      "IGD: Evaluasi kompartemen kaki, splint, elevasi, rujuk ortopedi. JANGAN pulangkan sebagai sprain biasa bila ada plantar ecchymosis atau nyeri tekan midfoot.",
      "Tanda Radiologis: 'Fleck Sign' (fragmen avulsi kecil di celah antara M1–M2), diastasis M1–M2 >2 mm, atau malalignment tepi medial M2 dengan tepi medial middle cuneiform.",
      "Definitif: ORIF anatomis (transarticular screw / dorsal bridge plate) atau Primary Arthrodesis (terutama pada cedera ligamen murni)."
    ],
    ppdsPearl: "Tiga kata kunci Lisfranc: (1) Plantar ecchymosis = patognomonik; (2) Fleck Sign = avulsi ligamen Lisfranc di celah M1–M2; (3) Kunci alignment X-ray AP adalah tepi medial M2 sejajar dengan tepi medial middle cuneiform.",
    references: ["Rockwood & Green's Fractures in Adults", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Seorang atlet datang dengan nyeri midfoot pasca-kaki terinjak saat plantar-fleksi. Pemeriksaan fisik menunjukkan memar di telapak kaki (plantar ecchymosis), dan X-ray AP menunjukkan fragmen avulsi kecil antara basis metatarsal 1 dan 2 ('Fleck Sign'). Struktur apakah yang mengalami avulsi?",
      options: [
        "Ligamen Talofibular Anterior (ATFL)",
        "Ligamen Lisfranc (antara medial cuneiform dan basis metatarsal ke-2)",
        "Tendon Tibialis Posterior",
        "Plantar Fascia"
      ],
      answerIndex: 1,
      explanation: "Fleck Sign adalah avulsi tulang dari insersi ligamen Lisfranc yang menghubungkan medial cuneiform dengan basis metatarsal ke-2, dan bersama plantar ecchymosis bersifat patognomonik untuk cedera Lisfranc."
    }
  },
  {
    id: "case-36",
    number: 36,
    title: "Achilles Tendon Rupture",
    category: "Lower Extremity & Pelvis",
    skdi: "SKDI 3A",
    badge: "NEW BATCH 2",
    summary: "Ruptur tendon terkuat di tubuh manusia, klasik terjadi pada pria usia 30–50 tahun ('weekend warrior') saat melakukan push-off mendadak. Lokasi tersering adalah watershed area (2–6 cm proksimal dari insersi kalkaneus) karena hipovaskularisasi.",
    classification: [
      "Akut (<4 minggu) vs Kronik/Neglected (>4 minggu, sering membutuhkan rekonstruksi V-Y advancement atau FHL transfer)."
    ],
    redFlags: [
      "Faktor risiko obat: Penggunaan antibiotik Fluoroquinolone (ciprofloxacin/levofloxacin) dan injeksi kortikosteroid lokal.",
      "Jangan tertipu jika pasien masih bisa sedikit plantar-fleksi aktif — itu dikompensasi oleh otot flexor hallucis longus (FHL), tibialis posterior, dan peroneus!"
    ],
    management: [
      "Diagnosis Klinis (Gold Standard): Palpable gap + Thompson Test positif (betis diremas pada posisi tengkurap → tidak ada plantar-fleksi pasif) + Matles Test (sudut istirahat kaki lebih dorsofleksi dibanding sisi sehat). USG/MRI hanya jika meragukan.",
      "IGD: Imobilisasi dalam posisi equinus (plantar-fleksi 20°) dengan anterior/posterior slab, non-weight bearing, rujuk ortopedi.",
      "Definitif: Konservatif dengan Functional Rehabilitation Protocol (boot dengan heel wedges bertahap) memiliki angka re-ruptur yang hampir setara dengan Operatif (open/percutaneous repair), namun operatif tetap sering dipilih pada atlet muda dengan risiko komplikasi luka/cedera n. suralis lebih tinggi."
    ],
    ppdsPearl: "Hafalkan: (1) Watershed area = 2–6 cm proksimal insersi kalkaneus; (2) Saraf berisiko saat repair tendon Achilles = Nervus Suralis; (3) Fluoroquinolone meningkatkan risiko ruptur tendon.",
    references: ["AAOS Clinical Practice Guideline: Acute Achilles Tendon Rupture", "Miller's Review of Orthopaedics"],
    quiz: {
      question: "Pria 42 tahun merasa seperti 'ditendang dari belakang' saat bermain badminton. Pemeriksaan Thompson test positif. Di lokasi manakah ruptur tendon Achilles paling sering terjadi dan saraf apakah yang paling berisiko cedera saat tindakan repair bedah?",
      options: [
        "Insersi langsung di kalkaneus; Nervus Tibialis Posterior",
        "2–6 cm proksimal insersi kalkaneus (watershed area); Nervus Suralis",
        "Musculotendinous junction; Nervus Peroneus Komunis",
        "10–12 cm proksimal kalkaneus; Nervus Safenus"
      ],
      answerIndex: 1,
      explanation: "Area 2–6 cm proksimal dari insersi kalkaneus merupakan watershed area dengan suplai darah paling sedikit sehingga paling sering ruptur. Nervus suralis berjalan di sisi posterolateral tendon dan paling berisiko cedera saat repair (terutama teknik perkutan)."
    }
  }
]);
