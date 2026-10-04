export type ServiceHubSlug =
  | 'ppf-kaplama'
  | 'seramik-kaplama'
  | 'pasta-cila'
  | 'buharli-motor-temizligi'
  | 'detayli-ic-hijyen';

export interface ServiceTechnicalSpec {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProtocolStep {
  stepNumber: string;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceHubData {
  slug: ServiceHubSlug;
  title: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  pricingHint: string;
  estimatedDuration: string;
  warrantyPeriod: string;
  technicalSpecs: ServiceTechnicalSpec[];
  benefits: ServiceBenefit[];
  protocolSteps: ServiceProtocolStep[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
}

export const SERVICES_DATA: Record<ServiceHubSlug, ServiceHubData> = {
  'ppf-kaplama': {
    slug: 'ppf-kaplama',
    title: 'PPF Kaplama (Boya Koruma Filmi)',
    badge: '190–210 Mikron Kendi Kendini İyileştiren TPU Film',
    metaTitle: 'Ankara PPF Kaplama — TPU Boya Koruma Filmi | Bumex Garage Bahçelievler',
    metaDescription:
      "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: 190–210 mikron termoplastik TPU PPF kaplama, sararmazlık garantisi, çiziklere karşı ısıyla kendini yenileyen optik netlik ve mikron vernik koruması.",
    heroHeadline: 'BOYANIZA ŞEFFAF KORUMA: KENDİNİ YENİLEYEN TPU PPF',
    heroSubtitle:
      'Yol mıcırlanmaları, yüksek sürat taş vurukları ve anahtar sürtmelerine karşı 200 mikronluk elastik poliüretan koruma. Sıcak su veya güneş ışığı ile kılcal çizikleri kendiliğinden onaran optik TPU teknolojisi.',
    pricingHint: "40.000 ₺'den Başlayan Fiyatlarla (Ücretsiz Panel Ekspertizi)",
    estimatedDuration: '2 – 3 İş Günü',
    warrantyPeriod: '5 – 10 Yıl Sararmazlık & Ayrılmama Garantisi',
    technicalSpecs: [
      {
        label: 'Film Kalınlığı',
        value: '195 – 210 Mikron',
        detail: 'Standart PVC kaplamalara kıyasla 3 kat daha kalın ve esnek TPU yapı.',
      },
      {
        label: 'Kendini Yenileme (Self-Healing)',
        value: '60°C Isı Aktivasyonu',
        detail: 'Sıcak su veya güneş ışığında kılcal sürtme izleri moleküler düzeyde kapanır.',
      },
      {
        label: 'Hidrofobik Üst Katman',
        value: 'Top-Coat Seramik Katkılı',
        detail: 'Su ve kir tutmayan yapısıyla yıkamayı kolaylaştırır, leke barındırmaz.',
      },
      {
        label: 'Işık Geçirgenliği',
        value: '%99 Optik Şeffaflık',
        detail: 'Orijinal boya renginde ve metalik taneciklerde hiçbir ton kaybı veya matlaşma yaratmaz.',
      },
    ],
    benefits: [
      {
        title: 'Taş Vuruklarına Karşı Üstün Koruma',
        description:
          'Otoyol süratlerinde ön tampon, kaput ve çamurluklara çarpan taşların boyayı delmesini önler.',
      },
      {
        title: 'Park Sürtmelerine Karşı Tampon Koruması',
        description:
          'Dar otopark manevralarında oluşabilecek sürtmelerde boyayı değil, filmi çizdirirsiniz.',
      },
      {
        title: 'Geri Dönüşümlü Orijinallik',
        description:
          'Söküldüğünde orijinal verniğe zarar vermez; ikinci el değerini fabrika kondisyonunda korur.',
      },
      {
        title: 'Kendi Kendini İyileştirme',
        description:
          'Kılcal fırça ve bez çizikleri güneş altında veya sıcak su döküldüğünde kendiliğinden düzelir.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Detaylı Dekontaminasyon ve Demir Tozu Arındırma',
        description:
          'Panel üzerindeki zift, katran ve demir tozları kille temizlenerek cam gibi pürüzsüzleştirilir.',
        duration: '3 - 4 Saat',
      },
      {
        stepNumber: '02',
        title: 'Mikron Düzeltme & Yüzey Hazırlığı',
        description:
          'Film altında hiçbir hare veya çizik kalmaması için tek aşama finiş cilası uygulanır.',
        duration: '4 - 6 Saat',
      },
      {
        stepNumber: '03',
        title: 'Tozsuz Odada Islak Pozisyonlama',
        description:
          'Özel montaj jeli ile film panele milimetrik oturtulur, hava kabarcıkları ragle ile tahliye edilir.',
        duration: '1 - 2 Gün',
      },
      {
        stepNumber: '04',
        title: 'Kenar Kıvırma ve Kürleşme Kontrolü',
        description:
          'Tüm kenarlar görünmeyecek şekilde panel arkasına kıvrılır; ısı tabancasıyla sabitlenir.',
        duration: '12 - 24 Saat',
      },
    ],
    faqs: [
      {
        question: 'PPF kaplama zamanla sararma veya matlaşma yapar mı?',
        answer:
          'Hayır. Kullandığımız yüksek kaliteli termoplastik poliüretan (TPU) filmler UV stabilizatörlüdür. 5 ila 10 yıl boyunca sararmama, çatlamama ve kabarmama garantilidir.',
      },
      {
        question: 'Aracın tamamını mı yoksa sadece ön kısmını mı kaplatmalıyım?',
        answer:
          'En yaygın tercih, taş darbelerinin %90’ına maruz kalan ön tampon, kaput, çamurluklar ve aynaları içeren Ön Koruma Paketidir. Bütçenize göre komple araç kaplama da yapılabilir.',
      },
      {
        question: 'Seramik kaplama ile PPF arasındaki fark nedir?',
        answer:
          'Seramik kaplama kimyasal bir sıvı katman olup su iticilik, UV koruması ve kılcal hare direnci sağlar ancak taş vuruklarını ve derin sürtmeleri engelleyemez. PPF ise 200 mikronluk fiziksel bir poliüretan filmdir; taş darbelerini emerek boyanın delinmesini önler.',
      },
      {
        question: 'PPF sökülürken orijinal boyaya zarar verir mi?',
        answer:
          'Profesyonel buhar ve söküm teknikleriyle söküldüğünde orijinal boyaya veya verniğe kesinlikle zarar vermez, yapışkan izi bırakmaz.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, aracım için PPF boya koruma filmi hakkında bilgi ve ekspertiz randevusu almak istiyorum.',
  },

  'seramik-kaplama': {
    slug: 'seramik-kaplama',
    title: '9H Nano Seramik Kaplama',
    badge: 'Çift Katmanlı 9H Kristal Sertlik & 24 Aya Varan Hidrofobik Koruma',
    metaTitle: 'Ankara Seramik Kaplama — 9H Nano Koruma | Bumex Garage Bahçelievler',
    metaDescription:
      "Ankara Bahçelievler'de 9H seramik kaplama: Elektronik mikron vernik analizi, kılcal çizik arındırma, derin parlaklık, yoğun su iticilik ve uzun süreli kimyasal direnç.",
    heroHeadline: 'DERİN PARLAKLIK & 9H NANO SERAMİK KORUMA',
    heroSubtitle:
      'Boya verniğinin mikron hassasiyetinde pürüzsüzleştirilmesinin ardından uygulanan 9H inorganik silika (SiO₂) katman; asit yağmurları, kuş pisliği ve güneşin UV ışınlarına karşı kalıcı koruma sağlar.',
    pricingHint: "20.000 ₺'den Başlayan Fiyatlarla (Segment ve Boya Durumuna Göre)",
    estimatedDuration: '1.5 – 2 İş Günü',
    warrantyPeriod: '2 Yıl Hidrofobik & Kimyasal Direnç Garantisi',
    technicalSpecs: [
      {
        label: 'Yüzey Sertliği',
        value: '9H Kalem Sertliği (Pencil Hardness)',
        detail: 'Geleneksel wax ve cilalara kıyasla kılcal çizilmelere karşı üstün mukavemet.',
      },
      {
        label: 'Su Temas Açısı',
        value: '110°+ Süper Hidrofobik',
        detail: 'Su damlaları küresel boncuklar halinde yüzeyden akıp tozu ve kiri beraberinde taşır.',
      },
      {
        label: 'Kimyasal Dayanım',
        value: 'pH 2 – pH 12 Direnci',
        detail: 'Asit yağmurları, yol tuzları, egzoz gazı ve agresif yıkama köpüklerine karşı tam bariyer.',
      },
      {
        label: 'Termal Direnç',
        value: '400°C Isı Bariyeri',
        detail: 'Yaz sıcağında güneş altında kaput üzerinde oluşan yüksek sıcaklıklarda bozulmaz.',
      },
    ],
    benefits: [
      {
        title: 'Kalıcı Aynasal Islak Görünüm (Candy Gloss)',
        description:
          'Boyanın renk pigmentlerini canlandırarak fabrikasyon çıkışın ötesinde derin, berrak bir ayna parlaklığı kazandırır.',
      },
      {
        title: 'Kuş Pisliği ve Ağaç Reçinesi Kalkanı',
        description:
          'Asidik kuş dışkılarının vernik katmanına nüfuz ederek kalıcı yanık oluşturmasını engeller; kolayca silinmesini sağlar.',
      },
      {
        title: 'Zahmetsiz Temizlik (Kendi Kendini Temizleme Etkisi)',
        description:
          'Kir ve statik toz tabakası kaplamaya tutunamaz; basınçlı suyla durulandığında araç hızla arınır.',
      },
      {
        title: 'Boya Verniğinin Ömrünü Uzatır',
        description:
          'Güneşin kavurucu ultraviyole ışınlarının verniği okside etmesini ve matlaştırmasını kalıcı olarak durdurur.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Elektronik Mikron Ölçümü ve Analiz',
        description:
          'Aracın tüm metal panelleri mikron ölçüm cihazıyla taranır; vernik kalınlık rezervi haritalandırılır.',
        duration: '1 - 2 Saat',
      },
      {
        stepNumber: '02',
        title: 'Çok Aşamalı Boya Düzeltme (Correction)',
        description:
          'Döner ve orbital polisaj makineleriyle harelenmeler, yıkama çizikleri ve matlık %95+ oranında yok edilir.',
        duration: '6 - 8 Saat',
      },
      {
        stepNumber: '03',
        title: 'İzopropil Alkol (IPA) ile Yağ Arındırma',
        description:
          'Seramik kaplamanın vernik gözeneklerine moleküler düzeyde kilitlenmesi için tüm pasta yağları çift kat IPA ile temizlenir.',
        duration: '1 - 2 Saat',
      },
      {
        stepNumber: '04',
        title: 'Katmanlı Seramik Uygulaması & IR Kürleme',
        description:
          'Taban ve üst katman seramik sıvıları panellere aplike edilir; homojen bağlanma için infrared lambalar altında pişirilir.',
        duration: '8 - 12 Saat',
      },
    ],
    faqs: [
      {
        question: 'Seramik kaplama taş vuruklarını engeller mi?',
        answer:
          'Hayır. Seramik kaplama mikron kalınlığında sertleştirilmiş kimyasal bir zırhtır; kılcal çizikleri, hareleri ve kimyasal aşınmaları engeller ancak yüksek hızlı taş darbeleri için PPF film tercih edilmelidir.',
      },
      {
        question: 'Seramik kaplamanın dayanım süresi ne kadardır?',
        answer:
          'Bumex Garage protokollerinde uygulanan çift kat 9H nano seramik, pH nötr şampuanlarla fırçasız yıkandığı takdirde 24 aya kadar ilk günkü hidrofobik boncuklanmasını ve parlaklığını korur.',
      },
      {
        question: 'Uygulama sonrasında aracı hemen yıkayabilir miyim?',
        answer:
          'Seramik kaplamanın tam moleküler kürleşmesi için ilk 7 gün boyunca kimyasal şampuan veya basınçlı su ile temas ettirilmemesi gerekir.',
      },
      {
        question: 'Motosikletlere de seramik kaplama yapılabilir mi?',
        answer:
          'Kesinlikle. İşletmemizde grenajlar, yakıt deposu, kask kabuğu ve vizörler için özel 9H seramik protokolü uygulanmaktadır.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, aracım için 9H nano seramik kaplama hakkında detaylı bilgi ve randevu almak istiyorum.',
  },

  'pasta-cila': {
    slug: 'pasta-cila',
    title: 'Pasta Cila ve Mikron Boya Restorasyonu',
    badge: 'Dijital Vernik Ölçümü & Kılcal Çizik ve Harelerin %95+ Giderimi',
    metaTitle: 'Ankara Pasta Cila — Mikron Boya Restorasyonu | Bumex Garage Bahçelievler',
    metaDescription:
      "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: Elektronik mikron ölçümüyle vernik katmanını eritmeden, döner ve orbital makinelerle kılcal çiziklerin, harelerin ve matlığın %95+ giderilmesi.",
    heroHeadline: 'VERNİĞİ ERİTMEYEN HASSAS MİKRON RESTORASYON',
    heroSubtitle:
      "Geleneksel sanayi tipi agresif pastalar verniği aşındırarak tüketir. Bumex Garage'da her panelin vernik mikron kalınlığı ölçülür; Alman menşeili kademeli aşındırıcılar ile boyanız korunarak sıfır hata parlaklık elde edilir.",
    pricingHint: "10.000 ₺'den Başlayan Fiyatlarla (Mikron Analizi Sonrası)",
    estimatedDuration: '1 – 1.5 İş Günü',
    warrantyPeriod: 'Haresiz & Çiziksiz Teslimat Garantisi',
    technicalSpecs: [
      {
        label: 'Çizik Giderme Oranı',
        value: '%95+ Kusursuz İyileşme',
        detail: 'Yıkama fırçası izleri, dairesel harelenmeler ve statik matlık tamamen yok edilir.',
      },
      {
        label: 'Vernik Tüketimi',
        value: 'Yalnızca 2 – 4 Mikron',
        detail: 'Fabrika verniği gereksiz yere zımparalanmaz; minimum talaş kaldırma prensibi uygulanır.',
      },
      {
        label: 'Işık Kontrolü',
        value: 'Scangrip CRI 96+ Spektrum',
        detail: 'İşletmemizdeki güneş ışığı simülatörü LED lambalarla en ufak çizik dahi gizlenemez.',
      },
      {
        label: 'Kullanılan Makineler',
        value: 'Rupes & Flex Dual-Action',
        detail: 'Boya yüzeyinde yanık veya hologram izi bırakmayan eksantrik orbital salınım.',
      },
    ],
    benefits: [
      {
        title: 'Girdap ve Hologram İzlerine Son',
        description:
          'Güneş vurduğunda beliren dalgalı hologram çizgileri ve dairesel hareler tamamen pürüzsüzleştirilir.',
      },
      {
        title: 'Boya Renginde Maksimum Doygunluk',
        description:
          'Yılların getirdiği matlaşmış oksidasyon tabakası kaldırılarak aracın asıl fabrika rengi ortaya çıkarılır.',
      },
      {
        title: 'Geçici Silikon Dolgu Yok, Kalıcı Sonuç',
        description:
          'Çizikleri yağla geçici olarak örten ucuz cilalar kullanılmaz; gerçek mekanik düzeltme yapılır.',
      },
      {
        title: 'Koruyucu Cila Katmanı Hediye',
        description:
          'Düzeltilen pürüzsüz yüzey, işlem sonrasında doğal karnauba wax veya sentetik mastik cila ile mühürlenir.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Kil Hamuru ve Yüzey Pürüzsüzleştirme',
        description:
          'Vernik gözeneklerine saplanmış statik tozlar ve endüstriyel kalıntılar kil uygulamasıyla temizlenir.',
        duration: '1.5 Saat',
      },
      {
        stepNumber: '02',
        title: 'Ağır Kusur Giderme (Heavy Cut Compound)',
        description:
          'Mikron rezervi elveren panellerde derin çizikler yün keçe ve mikro-aşındırıcı pasta ile düzeltilir.',
        duration: '4 - 5 Saat',
      },
      {
        stepNumber: '03',
        title: 'Orta Kesim & Parlatma (Medium Polish)',
        description:
          'İlk aşamanın bıraktığı izler sünger disk ve orta kesim bileşiğiyle berraklaştırılır.',
        duration: '3 - 4 Saat',
      },
      {
        stepNumber: '04',
        title: 'Ultra İnce Hologram Temizliği & Wax',
        description:
          'Yumuşak bitiş pediyle boya derinliği doruğa ulaştırılır; hidrofobik wax katmanı uygulanır.',
        duration: '2 Saat',
      },
    ],
    faqs: [
      {
        question: 'Pasta cila işlemi aracın boyasını inceltir mi?',
        answer:
          'Bilinçsiz sanayi uygulamalarında agresif zımpara ve keçe kullanımı verniği tehlikeli biçimde inceltebilir. Bumex Garage işletmemizde dijital mikron ölçer ile panel panel analiz yapılır ve yalnızca 2-4 mikronluk mikro seviyede tesviye yapılarak vernik ömrü korunur.',
      },
      {
        question: 'İşlemden sonra çizikler yıkandıkça geri çıkar mı?',
        answer:
          'Hayır. Ucuz oto yıkama cilaları çizikleri silikonla doldurur ve birkaç yıkamada uçar. Bumex Garage gerçek mekanik restorasyon yapar; giderilen çizik geri gelmez.',
      },
      {
        question: 'Boyadaki derin tırnak takılan çizikler pasta ile geçer mi?',
        answer:
          'Astar katmanına kadar inmiş, tırnağın net olarak takıldığı derin çizikler pasta cila ile tamamen yok edilemez ancak kenarları yumuşatılarak belirginliği %70-80 oranında azaltılabilir.',
      },
      {
        question: 'Pasta cila sonrası seramik kaplama yaptırmak mantıklı mı?',
        answer:
          'Evet, en ideal kombinasyondur. Yeni düzeltilmiş pürüzsüz verniğin hemen ardından seramik uygulanması, restorasyon sonucunu 24 aya kadar dondurarak koruma altına alır.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, boya restorasyonu ve mikron pasta cila işlemi için randevu almak istiyorum.',
  },

  'buharli-motor-temizligi': {
    slug: 'buharli-motor-temizligi',
    title: 'Dielektrik Kuru Buharlı Motor Temizliği',
    badge: 'Basınçsız Kuru Buhar & Dielektrik Yalıtkan Koruma',
    metaTitle: 'Ankara Buharlı Motor Temizliği — Dielektrik Güvenlik | Bumex Garage',
    metaDescription:
      "Ankara Bahçelievler'de yüksek ısı kuru buharla su birikintisi bırakmayan, dielektrik yalıtkan koruma ile sensör ve ECU (beyin) aksamını koruyan güvenli motor temizliği.",
    heroHeadline: 'ELEKTRONİK SENSÖRLERE BASINÇLI SU DEĞDİRMEDEN: DİELEKTRİK KURU BUHAR',
    heroSubtitle:
      'Geleneksel basınçlı suyla motor yıkamak alternatör, buji yuvaları ve beyin soketlerine telafisiz hasarlar verir. Yüksek ısı kuru buhar teknolojimiz yağ ve zifti su birikintisi yapmadan çözer; iletken olmayan dielektrik koruyucu soketleri neme karşı mühürler.',
    pricingHint: '1.500 ₺ Standart Tarife / VIP Paketlerde Dahil',
    estimatedDuration: '2 – 3 Saat',
    warrantyPeriod: 'Elektronik Güvenlik Protokolü',
    technicalSpecs: [
      {
        label: 'Buhar Sıcaklığı',
        value: '140°C – 160°C Yüksek Isı',
        detail: 'Katılaşmış motor yağlarını, antifriz kalıntılarını ve zifti anında eritir.',
      },
      {
        label: 'Nem Oranı',
        value: '< %5 Kuru Buhar (Dry Steam)',
        detail: 'Sıvı su damlacığı bırakmaz, buhar temas anında buharlaşarak kurur.',
      },
      {
        label: 'Dielektrik Mukavemet',
        value: 'İletken Olmayan Özel Formül',
        detail: 'Kablo soketleri ve sensör bağlantılarına uygulandığında neme bağlı kısa devre riskini engeller.',
      },
      {
        label: 'Koruyucu Bitiş',
        value: 'Antistatik Mat Plastik Koruma',
        detail: 'Hortum ve plastik kapakların çatlamasını önler; toz tutmayan mat fabrika görünümü verir.',
      },
    ],
    benefits: [
      {
        title: 'ECU (Motor Beyni) ve Soket Güvenliği',
        description:
          'Basınçlı suyun soketlerin içine sızıp oksitlenme yapması riski tamamen ortadan kaldırılır.',
      },
      {
        title: 'Davlumbaz Altı ve Izgara Detayı',
        description:
          'Radyatör petekleri, klima boruları ve motor bloğundaki dar alanlar özel nozullarla pırıl pırıl temizlenir.',
      },
      {
        title: 'Plastik ve Kauçuk Hortum Koruması',
        description:
          'Sıcaklıktan sertleşip çatlama riski taşıyan turbo ve radyatör hortumları elastikiyet koruyucuyla beslenir.',
      },
      {
        title: 'Isı Tahliyesini Kolaylaştırır',
        description:
          'Motor bloğunun üzerindeki kalın yağ ve çamur tabakası temizlendiğinde motorun ısı transferi rahatlar.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Soğuma ve Kritik Aksam İzolasyonu',
        description:
          'Motorun çalışma sıcaklığı düşürülür; akü kutup başları ve açık hava filtreleri korumaya alınır.',
        duration: '30 Dakika',
      },
      {
        stepNumber: '02',
        title: 'Dielektrik Yağ Çözücü Aplike Edilmesi',
        description:
          'Elektronik aksamlara zarar vermeyen iletken olmayan organik yağ çözücü detay fırçalarıyla dağıtılır.',
        duration: '45 Dakika',
      },
      {
        stepNumber: '03',
        title: '140°C Kuru Buharla Arındırma',
        description:
          'Yüksek basınçlı kuru buhar nozullarıyla yağ kalıntıları vakumlanarak yüzeyden uzaklaştırılır.',
        duration: '60 Dakika',
      },
      {
        stepNumber: '04',
        title: 'Basınçlı Hava Kurutma & Koruyucu Mastik',
        description:
          'Sıcak hava tabancasıyla nem kontrolü yapılır; tüm plastik aksamlar UV koruyucu antistatik losyonla beslenir.',
        duration: '30 Dakika',
      },
    ],
    faqs: [
      {
        question: 'Kuru buharlı motor temizliği aracımın garantisini bozar mı?',
        answer:
          'Hayır. Yetkili servislerin motor yıkamaya karşı çıkma sebebi basınçlı suyun soketlere zarar vermesidir. Bumex Garage dielektrik buhar teknolojisi su birikintisi bırakmadığı için servis garantisini riske atmaz.',
      },
      {
        question: 'Hibrit veya elektrikli araçlarda motor temizliği yapılabilir mi?',
        answer:
          'Evet. Yüksek voltaj kablo soketleri izole edilerek, dielektrik buharla hassas biçimde temizlik güvenle gerçekleştirilmektedir.',
      },
      {
        question: 'İşlem sonrasında motor yağlı ve parlak mı kalır?',
        answer:
          'Hayır. Ucuz sanayi spreylerinin bıraktığı toz çeken yapışkan yağlı görünümün aksine; Bumex Garage antistatik, orijinal mat fabrika kondisyonu sağlar.',
      },
      {
        question: 'Motor temizliği ne kadar sıklıkla yapılmalıdır?',
        answer:
          'Yılda 1 veya 2 kez kuru buharla motor bakımı yapılması; hortumların kurumaması ve motor kompartımanının temiz kalması için tavsiye edilir.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, dielektrik kuru buharlı motor temizliği hakkında bilgi ve randevu almak istiyorum.',
  },

  'detayli-ic-hijyen': {
    slug: 'detayli-ic-hijyen',
    title: 'Detaylı Araç İçi Hijyen & Koltuk Taban Kuaförü',
    badge: 'Sıcak Su Ekstraksiyonu & Aktif Ozon Dezenfeksiyonu',
    metaTitle: 'Ankara Bahçelievler Oto Kuaför & Detaylı İç Temizlik | Bumex Garage',
    metaDescription:
      "Ankara Bahçelievler'de sıcak su ekstraksiyonlu koltuk ve taban temizliği, tavan bakımı, menfez buharı ve aktif ozonlama ile derinlemesine oto kuaför.",
    heroHeadline: 'DERİN TEMİZLİK VE HİJYEN: İÇ RESTORASYON',
    heroSubtitle:
      'Kumaş ve deri koltuklardaki inatçı lekeler sıcak su ekstraksiyonuyla liften çekilir. Havalandırma kanalları yüksek ısı buharla arındırılır; aktif ozon jeneratörü ile sigara ve nem kokuları kaynağında giderilir.',
    pricingHint: "3.000 ₺ Taban Fiyattan Başlayan Paketlerle (Koltuk 3.500 ₺ / Kuaför 8.000 ₺)",
    estimatedDuration: '1 İş Günü',
    warrantyPeriod: 'Kusursuz Leke Çıkarma & Kokusuz Teslimat',
    technicalSpecs: [
      {
        label: 'Yıkama Teknolojisi',
        value: '80°C Sıcak Su Ekstraksiyonu',
        detail: 'Koltuk süngerine su basmadan, kiri anında geri çeken profesyonel Kärcher sistemi.',
      },
      {
        label: 'Koku & Bakteri Giderme',
        value: 'Aktif Ozon (O₃) Jeneratörü',
        detail: 'Parfümle kokuyu maskelemez; koku üreten bakteri ve mantarları kaynağında parçalar.',
      },
      {
        label: 'Deri Bakımı',
        value: 'pH Dengeli Krem & UV Kalkanı',
        detail: 'Deri koltukların kuruyup çatlamasını önleyen doğal kolajen ve mat besleyici losyon.',
      },
      {
        label: 'Kurutma Süresi',
        value: 'Sıcak Hava ile 2 Saatte Tam Kuruma',
        detail: 'Araç asla nemli veya koku yapacak şekilde teslim edilmez; nem ölçerle test edilir.',
      },
    ],
    benefits: [
      {
        title: 'Koltuk Süngerlerinde Sıfır Kusma Riski',
        description:
          'Koltukların derinliklerine su hapsedilmez; yüksek vakumlu ekstraksiyon ile tüm kirli su geri toplanır.',
      },
      {
        title: 'Klima ve Havalandırma Menfezlerinde Sterilizasyon',
        description:
          'Klima kanallarına 140°C kuru buhar verilerek lejyonella bakterileri ve küf mantarları yok edilir.',
      },
      {
        title: 'Tavan Döşemesi Sarkma Riski Yok',
        description:
          'Tavan halısı aşırı ıslatılmaz; özel mikro buharlı bezler ve köpükle sarkma riski olmadan silinir.',
      },
      {
        title: 'Plastik ve Torpido Mat Koruma',
        description:
          'Güneşte parlayıp ön cama yansıma yapan ucuz silikonlar yerine orijinal saten mat koruyucu uygulanır.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Derin Vakumlu Süpürme ve Toz Tahliyesi',
        description:
          'Koltuk rayları, bagaj havuzu ve taban halısı pnömatik hava tabancası ve yüksek emişli süpürgeyle arındırılır.',
        duration: '1 - 2 Saat',
      },
      {
        stepNumber: '02',
        title: 'Sıcak Ekstraksiyonlu Koltuk & Taban Yıkama',
        description:
          'Kumaş ve deri döşemeler leke çözücülerle fırçalanır; 80°C sıcak su püskürtülüp anında vakumlanır.',
        duration: '3 - 4 Saat',
      },
      {
        stepNumber: '03',
        title: 'Buharlı Detay & Torpido Restorasyonu',
        description:
          'Pedallar, kapı fitilleri, bardaklıklar ve konsol düğmeleri buharla mikro düzeyde arındırılır.',
        duration: '2 Saat',
      },
      {
        stepNumber: '04',
        title: 'Ozonlama (O₃) & Kurutma Protokolü',
        description:
          'Araç kabinine 30 dakika medikal ozon gazı basılır; ardından sıcak hava üfleçleriyle kuruluk teyit edilir.',
        duration: '1.5 Saat',
      },
    ],
    faqs: [
      {
        question: 'Koltuk yıkandıktan sonra araç nemli mi teslim edilir?',
        answer:
          'Kesinlikle hayır. Yüksek emişli ekstraksiyon makinelerimiz suyun %95’ini anında geri çeker. Kalan hafif nem özel araç kurutma fanları ile kurutulur; araç kuru ve kullanıma hazır teslim edilir.',
      },
      {
        question: 'Sigara, evcil hayvan veya süt dökülmesi kokuları tamamen çıkar mı?',
        answer:
          'Evet. Yüzeydeki leke kaynağı sıcak suyla temizlendikten sonra uyguladığımız medikal ozon (O₃) gazı kabin içine yayılarak kokuyu moleküler olarak parçalar ve kalıcı temizlik sağlar.',
      },
      {
        question: 'Deri koltuklarda parlama ve kayganlık olur mu?',
        answer:
          'Hayır. Yağlanan deri koltuklar mat orijinal kondisyonuna getirilir; ardından deriyi besleyen çatlama önleyici mat koruyucu süt sürülür.',
      },
      {
        question: 'Detaylı iç kuaför ne kadar sürer?',
        answer:
          'Aracın kirlilik derecesine göre kapsamlı bir iç hijyen ve kurutma süreci genellikle sabah bırakılıp akşam teslim edilecek şekilde ortalama 6-8 saat sürer.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, detaylı araç içi kuaför ve hijyen hizmetiniz hakkında randevu almak istiyorum.',
  },
};

export function getAllServiceSlugs(): ServiceHubSlug[] {
  return Object.keys(SERVICES_DATA) as ServiceHubSlug[];
}

export function getServiceBySlug(slug: string): ServiceHubData | null {
  return SERVICES_DATA[slug as ServiceHubSlug] || null;
}
