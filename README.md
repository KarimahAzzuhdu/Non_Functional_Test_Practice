# Belajar QA - Non Functional Test
Explorasi non functional test dalam rangka belajar Quality Assurance Software. Nanti kedepannya proyek ini diupgrade jadi Simulasi QA kaya repo sebelah (playwright) dimana lebih rapi dan ada dokumentasinya.

## Rencana eksplorasi :
### Performance Test 
#### Jenis-jenis dan definisi
| Test | Definisi |
|------|----------|
| Load Testing | Menguji bagaimana sistem bekerja ketika menerima beban kerja tertentu. Tujuannya adalah melihat performa aplikasi pada jumlah pengguna atau transaksi yang diharapkan. Hasilnya dapat membantu mengetahui batas kapasitas yang aman dan stabil untuk operasional harian.|
| Stress Testing | Menguji batas maksimal sistem dengan memberikan beban melebihi kapasitas normal untuk mengetahui batas toleransi aplikasi. Tujuan stress testing adalah melihat bagaimana sistem menangani situasi overload dan memastikan bahwa aplikasi tidak rusak sepenuhnya dalam keadaan darurat. |
| Spike Testing | Bentuk lain dari stress testing, spike testing menekankan pada perubahan beban yang tiba-tiba dan tajam dalam waktu singkat, misalnya, dari jumlah pengguna rendah ke jumlah pengguna sangat tinggi. Ini penting untuk mengetahui apakah sistem bisa segera beradaptasi atau mengalami crash saat lonjakan tiba-tiba. |
| Endurance Testing (Soak Testing) | Menguji kinerja aplikasi dalam jangka waktu panjang untuk memastikan bahwa sistem tetap stabil meskipun beroperasi terus menerus. Uji ini dilakukan untuk menemukan potensi kebocoran memori, penurunan kinerja, atau masalah stabilitas dalam kondisi penggunaan yang berkepanjangan. |
| Scalability Testing | Mengukur kemampuan sistem untuk tumbuh dan beradaptasi dengan peningkatan beban kerja. Scalability testing berguna untuk menentukan kapan atau bagaimana aplikasi perlu ditingkatkan (misalnya, dengan menambah server atau memperbarui perangkat lunak) agar tetap dapat melayani kebutuhan bisnis. |
| Volume Testing | Menguji aplikasi dengan jumlah data yang sangat besar untuk mengetahui bagaimana aplikasi menangani basis data besar atau proses input data yang masif. Volume testing membantu menemukan masalah kinerja yang muncul saat berhadapan dengan volume data yang lebih besar dari biasanya. |
| Capacity Testing | Mengukur jumlah maksimum pengguna atau transaksi yang dapat ditangani aplikasi tanpa menurunkan kinerja atau stabilitas. Hasil pengujian ini digunakan untuk menentukan kapasitas optimal aplikasi dan membantu merencanakan kebutuhan sumber daya di masa depan. |
| Latency Testing | Menguji waktu respons aplikasi dari permintaan pengguna hingga respon diterima. Latency testing penting untuk mengukur keterlambatan yang dialami pengguna dan memastikan bahwa waktu respon tetap sesuai harapan. |

sumber : chatgpt
#### Performance Test Life Cycle (PTLC)
1. Perencanaan
2. Desain
3. Pelaksanaan
4. Analisis
5. Optimasi
6. Validasi
#### Performance Test Report
1. Executive Summary. Ringkasan tentang tujuan dari tes, metode yang digunakan, dan hasil yang diperoleh.
2. Test Environment. Informasi tentang perangkat lunak dan perangkat keras yang digunakan, serta konfigurasi jaringan
3. Test Design. Informasi tentang jenis tes yang dilakukan, kasus uji, dan data uji.
4. Test Result. Informasi tentang kinerja sistem/aplikasi, seperti waktu respons, throughput, dan efisiensi. Kemudian hasil dari tes ini dibandingkat dengan tujuan dan batasan yang ditetapkan sebelumnya.
5. Analysis and Recommendations. Informasi akan kekuatan dan kelemahan sistem/aplikasi, serta rekomendasi untuk memperbaiki masalah yang ditemukan.

sumber : myskill medium

#### Tools
ada beberapa : Apache JMeter, LoadRunner, Gatling, NeoLoad, dan BlazeMeter

Tools yang akan aku pake di repo ini K6, dimana dia itu open source dan relatif mudah.