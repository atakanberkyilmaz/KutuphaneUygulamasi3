# Kütüphane Uygulaması

Bu proje, Typescript, React Native, Expo ve Redux Toolkit teknolojilerini kullanarak geliştirilen bir kütüphane uygulamasıdır.

## Gereksinimler

Uygulamayı çalıştırabilmek için aşağıdaki gereksinimlerin sağlanmış olması gerekmektedir:

- Node.js ve npm: Node.js ve npm paket yöneticisi, uygulamanın çalışması için gereklidir. Node.JS'i kurduktan sonra npm otomatik olarak yüklenir   
  [Node.js](https://nodejs.org/)
- Expo CLI: Expo projesini yönetmek ve uygulamayı çalıştırmak için kullanılacak olan Expo CLI'nin yüklü olması gerekmektedir.

## Kurulum

1. Yeni bir terminal açın ve şu komutu yazın

    ```bash
    expo init KutuphaneUygulamasi2


2. Proje dizinine gidin:

   ```bash
   cd KutuphaneUygulamasi2

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install


## Çalıştırma
Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
       ```bash
       expo start

Bu komut, Expo CLI ile uygulamayı başlatacak ve QR kodu ile tarayıcınıza veya Expo Go uygulamasına bağlantı vererek uygulamayı çalıştıracaktır.

## Diğer kullandığım komutlar
    ```bash
    npm install -> npm paketini kurmak için
    yarn install -> yukarıdaki komut çalışmazsa
    expo start -> Bu komutla beraber açtığınız emulatorde metro bundler başlar
    yarn start -> Bu komut ile beraber emulator ve yazdığımız kodlar arasında metro aracılığı ile bağlantı sağlıyoruz
    yarn add @reduxjs/toolkit -> redux toolkit kullanabilmek için
    eas build:run -p android -> uygulamanın abb dosyasını çıkartmak için
    expo fetch:android:keystore -> keystore dosyasını alabilmek için
    npm update react -> aldığım hataları çözmek için
    yarn upgrade react ->  aldığım hataları çözmek için
    npm i eslint-plugin-react-hooks -> hook call hatasını çözmek için
    
## Teknik Seçimler ve Gerekçelendirmeler
- Farklı ekranlar arasında gezinmek için React Navigation kütüphanesi kullanılmıştır.
- Kitap verilerini uygulamanın durumu dışında saklamak için AsyncStorage kullanılmıştır.
- Minimalist bir UI tasarımı ile kullanıcı dostu bir arayüz oluşturulmuştur.

## Kitap Sınıfı
- Kitap Adı
- Kitap Tanımı
- ISBN numarası
- Yazar
- Tür
- Kitap Kapağı(require ile)

## Özellikler
- Kitap adı, ISBN numarası, yazarlar ile ilgili arama ve sıralama, eklenen kitabın türü ile ilgili filtreleme yapılabilir 
- Sisteme yeni bir kitap eklenip mevcut kitaplar düzenlenebilir ve silinebilir.
- Kitaplar bir sayfada liste halinde görüntülenebilir ve bir kitabın detay bilgileri incelenebilir.
## Yardım Aldığım Videolar ve Araçlar
- [Redux 1](https://www.youtube.com/watch?v=4gQT69mga2Q)
- [Redux 2](https://www.youtube.com/watch?v=y13lq_8oDnk)
- [Geleceği Yazanlar React Native 101](https://gelecegiyazanlar.turkcell.com.tr/konu/egitim/react-native-101)
- [Typescript 1](https://www.youtube.com/watch?v=H8qOotIAaEA)
- [Typescript 2](https://www.youtube.com/watch?v=JaaTll3ukLw&t=1750s)
- [React Native](https://reactnative.dev/docs/components-and-apis)
- [Setup](https://reactnative.dev/docs/environment-setup)

## Uygulamanın APK Linki
- [APK](https://drive.google.com/file/d/1Hug6nOyjZSVMRvfo6JRtMXvSsLMCSAPq/view?usp=sharing)
  
