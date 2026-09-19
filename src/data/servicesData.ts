export type ServiceHubSlug =
  | 'ppf-kaplama'
  | 'seramik-kaplama'
  | 'boya-restorasyonu'
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
    badge: '190–210 Mikron Kendi Kendini İyileştiren TPU Zırh',
    metaTitle: 'Ankara PPF Kaplama — TPU Boya Koruma Filmi | Bumex Garage Bahçelievler',
    metaDescription:
      "Ankara Bahçelievler 7. Cadde'ye 350m: 190–210 mikron termoplastik TPU PPF kaplama, sararmazlık garantisi, çiziklere karşı ısıyla kendini yenileyen optik netlik ve mikron vernik kalkanı.",
    heroHeadline: 'BOYANIZA KUSURSUZ ZIRH: ŞEFFAF PPF KAPLAMA',
    heroSubtitle:
      'Yol mıcırlanmaları, yüksek sürat taş vurukları ve anahtar sürtmelerine karşı 200 mikronluk elastik poliüretan kalkan. Isı tabancası veya güneş ışığı ile kılcal çizikleri kendiliğinden onaran optik TPU teknolojisi.',
    pricingHint: 'Garajımızda Ücretsiz Panel Ekspertizi ile Belirlenir',
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
        value: '%99.4 Optik Netlik',
        detail: 'Aracın orijinal boya tonunu, simlerini ve derinliğini hiçbir şekilde bozmaz.',
      },
    ],
    benefits: [
      {
        title: 'Yüksek Hızlı Taş Vuruklarına Tam Koruma',
        description:
          'Şehirlerarası otoban sürüşlerinde öndeki araçların fırlattığı taşların boyayı astara kadar delmesini tamamen engeller.',
      },
      {
        title: 'Sararma ve Matlaşmaya Karşı UV Kalkanı',
        description:
          'Alifatik TPU polimerler UV radyasyonuna dirençlidir; güneş altında sararmaz ve verniğe asla yapışıp leke bırakmaz.',
      },
      {
        title: 'Kusursuz Kenar Kıvırma (Tucked Edges)',
        description:
          'Paneller keskin bıçak izi bırakılmadan söküm yapılmadan veya minimum riskle kenarların altına kıvrılarak görünmez hale getirilir.',
      },
      {
        title: 'İkinci El Değerini Muhafaza Eder',
        description:
          'Orijinal boyanın fabrika kondisyonunu koruyarak ekspertiz sırasında mikron boya kalınlığını güvenceye alır.',
      },
    ],
    protocolSteps: [
      {
        stepNumber: '01',
        title: 'Dekontaminasyon ve Demir Tozu Arındırma',
        description:
          'Boya yüzeyindeki reçine, zift ve gözeneklere işlemiş demir tozları pH nötr kimyasallar ve kil hamuru ile tamamen sıfırlanır.',
        duration: '3 - 4 Saat',
      },
      {
        stepNumber: '02',
        title: 'Boya Düzeltme & Mikron İyileştirme',
        description:
          'Film altına hiçbir kılcal çizik hapsedilmemesi için vernik yüzeyi tek veya çift aşamalı pasta cila protokolüyle ayna parlaklığına getirilir.',
        duration: '4 - 6 Saat',
      },
      {
        stepNumber: '03',
        title: 'Tozsuz Stüdyo & Islak Montaj',
        description:
          'Pozitif basınçlı tozsuz montaj peronumuzda özel kaydırıcı jel ve mikrofiber spatulalarla hava kabarcığı kalmadan milimetrik yerleşim yapılır.',
        duration: '1 - 2 Gün',
      },
      {
        stepNumber: '04',
        title: 'Kenar Kürleşmesi & Kalite Kontrolü',
        description:
          'Kenar kıvrımları ısı tabancasıyla sabitlenir; 24 saatlik statik kürleşme sonrasında ultraviyole lambalar altında 360° son kontrol yapılır.',
        duration: '12 - 24 Saat',
      },
    ],
    faqs: [
      {
        question: 'PPF kaplama ile seramik kaplama arasındaki temel fark nedir?',
        answer:
          'Seramik kaplama kimyasal bir sıvı katman olup su iticilik, UV koruması ve kılcal hare direnci sağlar ancak taş vuruklarını ve derin sürtmeleri engelleyemez. PPF ise 200 mikronluk fiziksel bir poliüretan zırhtır; taş darbelerini emerek boyanın delinmesini önler.',
      },
      {
        question: 'PPF sökülürken orijinal fabrika boyasına zarar verir mi?',
        answer:
          'Hayır. Bumex Garage stüdyosunda uygulanan birinci sınıf optik TPU filmler, boya dostu medikal yapıştırıcıya sahiptir. Söküm işlemi profesyonel buhar desteğiyle yapıldığında vernikte hiçbir iz veya yapışkan kalıntısı bırakmaz.',
      },
      {
        question: 'Yalnızca ön koruma paketi (kaput, çamurluklar, tampon) yaptırabilir miyim?',
        answer:
          'Evet. Taş vuruklarına en açık olan ön tampon, tam kaput, sağ/sol ön çamurluklar, farlar ve yan ayna kapaklarını içeren Ön Koruma Paketi en çok tercih edilen opsiyonlarımızdandır.',
      },
      {
        question: 'PPF kaplamalı araç nasıl yıkanmalıdır?',
        answer:
          'pH nötr aktif köpük ve fırçasız mikrofiber yıkama önerilir. Basınçlı su tabancasının filmin kenar kıvrımlarına 15 cm’den daha yakın tutulmaması filmin ömrünü uzatır.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, aracım için PPF boya koruma filmi hakkında bilgi ve ekspertiz randevusu almak istiyorum.',
  },

  'seramik-kaplama': {
    slug: 'seramik-kaplama',
    title: '9H Nano Seramik Kaplama',
    badge: 'Çift Katmanlı 9H Kristal Sertlik & 24 Aya Varan Hidrofobik Kalkan',
    metaTitle: 'Ankara Seramik Kaplama — 9H Nano Koruma | Bumex Garage Bahçelievler',
    metaDescription:
      "Ankara Bahçelievler'de 9H nano seramik kaplama: Elektronik mikron vernik analizi, %95+ hare giderme, aynasal derinlik, yoğun su iticilik ve 24 aya kadar kimyasal kalkan.",
    heroHeadline: 'AYNASAL DERİNLİK & 9H NANO SERAMİK ZIRH',
    heroSubtitle:
      'Boyanızın mikron seviyesinde kusursuzlaştırılmasının ardından uygulanan 9H sertliğindeki inorganik silika (SiO₂) kalkan; asit yağmurları, kuş pisliği ve UV ışınlarına karşı 24 ay kalıcı koruma sağlar.',
    pricingHint: 'Boya Durumu & Araç Segmentine Göre Belirlenir',
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
          'Kesinlikle. Motosiklet stüdyomuzda grenajlar, yakıt deposu, kask kabuğu ve vizörler için özel 9H seramik protokolü uygulanmaktadır.',
      },
    ],
    whatsappMessage:
      'Merhaba Bumex Garage, aracım için 9H nano seramik kaplama hakkında detaylı bilgi ve randevu almak istiyorum.',
  },

  'boya-restorasyonu': {
    slug: 'boya-restorasyonu',
    title: 'Mikron Boya Restorasyonu & Pasta Cila',
    badge: 'Dijital Vernik Ölçümü & Kılcal Çizik ve Harelerin %95+ Giderimi',
    metaTitle: 'Ankara Mikron Pasta Cila & Boya Restorasyonu | Bumex Garage Bahçelievler',
    metaDescription:
      "Elektronik mikron ölçümüyle vernik katmanını eritmeden, rotary ve dual-action orbital makinelerle kılcal çiziklerin, güneş yanığı başlangıçlarının ve harelerin %95+ giderilmesi.",
    heroHeadline: 'VERNİĞİ ERİTMEYEN HASSAS MİKRON RESTORASYON',
    heroSubtitle:
      "Geleneksel sanayi tipi agresif pastalar verniği aşındırarak tüketir. Bumex Garage'da her panelin vernik mikron kalınlığı ölçülür; Alman menşeili kademeli aşındırıcılar ile boyanız korunarak sıfır hata parlaklık elde edilir.",
    pricingHint: 'Çizik Derinliği ve Panel Sayısına Göre Belirlenir',
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
        detail: 'Uygulama stüdyomuzdaki güneş ışığı simülatörü LED lambalarla en ufak çizik dahi gizlenemez.',
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
          'Bilinçsiz sanayi uygulamalarında agresif zımpara ve keçe kullanımı verniği tehlikeli biçimde inceltebilir. Bumex Garage stüdyosunda dijital mikron ölçer ile panel panel analiz yapılır ve yalnızca 2-4 mikronluk mikro seviyede tesviye yapılarak vernik ömrü korunur.',
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
    title: '140°C Dielektrik Kuru Buharlı Motor Temizliği',
    badge: 'Sıfır Basınçlı Su Riski & Yalıtkan Koruyucu Dielektrik Katman',
    metaTitle: 'Ankara Buharlı Motor Temizliği — Dielektrik Güvenlik | Bumex Garage',
    metaDescription:
      "Ankara Bahçelievler'de 140°C kuru buharla su birikintisi bırakmayan, dielektrik yalıtkan koruma ile sensör ve ECU (beyin) arıza riskini sıfıra indiren motor temizliği.",
    heroHeadline: 'ELEKTRONİK SENSÖRLERE SIFIR RİSK: DİELEKTRİK KURU BUHAR',
    heroSubtitle:
      'Geleneksel basınçlı suyla motor yıkamak alternatör, buji yuvaları ve beyin soketlerine telafisiz hasarlar verir. 140°C kuru buhar teknolojimiz yağ ve zifti su birikintisi yapmadan çözer; iletken olmayan dielektrik koruyucu soketleri neme karşı mühürler.',
    pricingHint: 'VIP Paket İçerisinde veya Münferit Olarak Sunulur',
    estimatedDuration: '2 – 3 Saat',
    warrantyPeriod: 'Sıfır Elektronik Arıza Garantisi',
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
        detail: 'Kablo soketleri ve sensör bağlantılarına sıkıldığında kısa devre riskini sıfırlar.',
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
    badge: '80°C Sıcak Su Ekstraksiyonu & Medikal Ozon (O₃) Dezenfeksiyonu',
    metaTitle: 'Ankara Bahçelievler Oto Kuaför & Detaylı İç Temizlik | Bumex Garage',
    metaDescription:
      "Ankara Bahçelievler'de sıcak su ekstraksiyonlu koltuk ve taban yıkama, tavan sterilizasyonu, havalandırma kanalı buharı ve medikal ozon gazı ile derinlemesine oto kuaför.",
    heroHeadline: 'FABRİKA KOKUSU VE DERİN HİJYEN: İÇ RESTORASYON',
    heroSubtitle:
      'Kumaş ve deri koltuklardaki inatçı lekeler sıcak ekstraksiyon vakumuyla kökten çekilir. Havalandırma kanalları 140°C buharla sterilize edilir; medikal ozon jeneratörü ile sigara kokusu, bakteri ve maytlar %99.9 oranında yok edilir.',
    pricingHint: '3.000 ₺ Taban Fiyattan Başlayan Paketlerle',
    estimatedDuration: '1 İş Günü',
    warrantyPeriod: 'Kusursuz Leke Çıkarma & Kokusuz Teslimat',
    technicalSpecs: [
      {
        label: 'Yıkama Teknolojisi',
        value: '80°C Sıcak Su Ekstraksiyonu',
        detail: 'Koltuk süngerine su basmadan, kiri anında geri çeken profesyonel Kärcher sistemi.',
      },
      {
        label: 'Koku & Bakteri İmhası',
        value: 'Medikal Ozon (O₃) Jeneratörü',
        detail: 'Parfümle kokuyu maskelemez; koku üreten bakteri ve mantarları moleküler düzeyde parçalar.',
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
          'Kesinlikle hayır. Yüksek emişli ekstraksiyon makinelerimiz suyun %95’ini anında geri çeker. Kalan hafif nem stüdyo içi özel araç kurutma fanları ile kurutulur; araç kuru ve kullanıma hazır teslim edilir.',
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
