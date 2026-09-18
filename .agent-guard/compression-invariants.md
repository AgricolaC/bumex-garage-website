# Sıkıştırma Değişmezleri (Compression Invariants)

Bu projedeki her token sıkıştırma katmanı aşağıdaki altı kuralın tamamını karşılamak zorundadır. Bu kurallar uygulamayı değil davranışı bağlar: çalışma zamanını (runtime) değiştirmek bunları değiştirmez.

1. **Her satır erişilebilir olmalıdır.** Her öğe ya görünür çıktıda yer almalı ya da canlı bir geri getirme işaretçisinin (retrieval pointer) arkasında olmalıdır. İkisinde de olmayan bir öğe doğrudan veri kaybıdır.
2. **Geri getirme net pozitif olmalıdır.** `tokens(gorunum) + tokens(geri_getirilen) < tokens(orijinal)`. Takip etmesi yerine geçtiği yükten daha pahalıya mal olan bir işaretçi, sıkıştırma rozeti takmış bir gerilemedir.
3. **Prompt ön eki (prefix) bir oturum boyunca değiştirilemez.** Araç listeleri ve sistem içeriği turlar boyunca bayt düzeyinde kararlı kalır. Ön eki değiştirerek şema tokenlarından tasarruf etmeye çalışmak, 10 katlık bir önbellek indirimini tek seferlik bir kazanım uğruna feda etmektir.
4. **Örnekleme sinyal gerektirir.** Öğeler istatistiksel olarak birbirinden ayırt edilemiyorsa, hepsini saklayın. Seçim için geçerli bir temel olmadan silmek keyfi bir veri kaybıdır.
5. **Tek geri getirme isim alanı (namespace).** Tek bir saklama alanı ve tek bir geri getirme aracı olmalıdır. Tek bir bağlam içinde iki farklı karma (hash) formatı bulunması bir doğruluk hatasıdır.
6. **Gerçek bir tokenizer ile ölçüm yapın.** Karakter sayısı sezgileri, bayt tasarrufunu token tasarrufu olarak raporlar. %85'lik bir iddianın gerçekte %37 çıkmasının sebebi budur.
