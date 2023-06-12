function showImage() {
  a = document.querySelector(".sol_img");
a.style.display = "block";
}




    <!-- Inside this JavaScript file I've inserted Questions and Options only -->
    
    
    // creating an array and passing the number, questions, options, and answers
    let questions = [
    {
    numb: 1,
    question: "एक दुकानदार ने 30% की हानि पर लेख बेचा। यदि विक्रय मूल्य ₹ 350 है, तो लागत मूल्य ज्ञात करें।",
    answer: "500",
    options: [
    "500",
    "550",
    "600",
    "539"
    
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipE50PVYyPNo1vkccGul_7f_1YC4vKXAgG5KJxZzPGkocOlSqw0IN2VGoc57Lh6Axz7oFnKIANdZ7Mo5M2kX5-qSNQbQLcI_znlfvk2LUjCQBLoAJoPEWq4fXgoWxIH6bUDdUs3qCpsfTw_qgFeTdPLK8xJeOY0RbAdfiKllJbGjsoV695j-1H_TVu/s1830/Ques.%201%20.jpg',
    },
    {
    numb: 2,
    question: "एक दुकानदार ने 40% हानि पर लेख बेचा। यदि विक्रय मूल्य ₹6000 है तो लागत मूल्य ज्ञात कीजिए।",
    answer: "10000",
    options: [
    "10000",
    "3000",
    "6000",
    "none"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCJKQvzuPtrm80bedr90dqLM9px27mrzTn5KyZ5z2klFCmAcwSJaQQk7Zi6Kp1w2bBVs8xVD4bUwnW1yGKsyEcahHcSsH20__v5WFBeZPPTN-kc1Qycq-I_Tw3LEVFhJmaYuVav3uMkyfc8NtpeRiIJXAZJ8rsZytkSDWSvVItqJ_DLFEbika9XDc0/s2029/question%202.jpg',
    },
    {
    numb: 3,
    question: "एक दुकानदार ने 16⅔% की हानि पर लेख बेचा।  यदि विक्रय मूल्य ₹500 है तो लागत मूल्य ज्ञात करें।",
    answer: "600",
    options: [
    "500",
    "600",
    "1000",
    "450"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPeyDwK2zQF0AabBJEx2JyVz24lFhUmjO9FsDzDcAMi96-T0eClF2DQiv2hC7HLQ1hJ_xlE9dztD15AW_D5-bAtisMni7ELuN1UNszuXSwxw5GDFsLaFStRGJVdFDmWIyC8413H4JWnWdwHottk4ZZs43G2l9-SKtDO_uiF8QcBrIB0GLh-UcXTrDt/s1922/Question%203.jpg',
    },
    {
    numb: 4,
    question: "एक मोबाइल फोन का विक्रय पूल्य 59,620 रुपये है और इसे 8.4% लाभ पर बेचा गया। मोबाइल फोन का लागत मूल्य (रु में ) है SSC CGL 21.04.2022 (Afternoon)",
    answer: "55000",
    options: [
    "52000",
    "50000",
    "55000",
    "45000"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAIwxC7RAwyx4hvq2Srk5hKIVXflDvM5_SEL0etM257AbknV6CRnT5FkVFu_uIedaeL1y2GhPKHa1OGKkFCAqEYcd_qa3fL2mEqvYEzqSUeNq5_ODc7zRXI6xwer0ObHmDMzZVEfp1blD5ZW2fPvQM9qNP3U2mt6m8wXRs57Ptp5EYECmNKFzkCh21/s2090/question%204.jpg',
    },
    {
    numb: 5,
    question: "एक दुकानदार ने 6⅔% की लाभ पर लेख बेचा। यदि विक्रय मूल्य ₹1,600 हैं तो क्रय मूल्य ज्ञात करें।",
    answer: "1500",
    options: [
    "1200",
    "1400",
    "1500",
    "none"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgft1dTIorXR_vREmPBQI7MjNKs75FGwmsKsvH9bVC4Lb82wqVhRGNbUBikFc7QIBeHqtCetlM1U1i9A6nZTIdM1DAw8Qyrlvkh8zB-JnFw_1Djd9XjB0Npjdea5Ca6HazKbFADSaPsceBrqhoSzhyqpL7UqrCkJkG70MBc0g_zkQ5y5LrIQ3kemq6M/s2070/question%205.jpg',
    },
    {
    numb: 6,
    question: "लागत मूल्य और विक्रय मूल्य का अनुपात 10 : 11 है। लाभ प्रतिशत ज्ञात कीजिए।",
    answer: "10%",
    options: [
    "10%",
    "15%",
    "20%",
    "19%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH5CbGHzAr6wJsaSXNd9lWzlKUcP7kvgQqBm6rsqCmhzMqK51LepI51k1ItwruDfZOclppv95PvQDTXng1SBzGAEM0iBrrBlTnt6RjqrY1arZ1fygk64bHViVfVXKlBZjikXLYdzJTtbO-V7BCkRo1k66puP9KjgPQdlUs-kc3BREs97zOry5bxFHZ/s2275/DocScanner%2011-Jun-2023%206-46%20pm%20%281%29.jpg',
    },
    {
    numb: 7,
    question: "यदि किसी पुस्तक को 20% लाभ पर बेचा जाता है, तो क्रय मूल्य और विक्रय मूल्य का अनुपात है ",
    answer: "5:6",
    options: [
    "5:6",
    "5:7",
    "1:4",
    "2:3"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifTXmgCLgh8f78KPGiR9DzLDrayFyFYD1eKj29GZrqgx2NXHrYHojOPdP7gcGhywkTlQhIJLg7Eo31QNCgYU4_UAEJqnRf1xs0bcjZhM2TgAvCJQX9RouafXdEqciGUQpiE7xWthAIPltZpUtuHohZx0qQM6auKcOWAqiNnwBx0bH_SYOJka3T0Rx7/s1554/question%207.jpg',
    },
    {
    numb: 8,
    question: "यदि कोई पुस्तक 300% लाभ पर बेची जाती है, तो क्रय मूल्य और विक्रय मूल्य का अनुपात है",
    answer: "1:4",
    options: [
    "1:4",
    "1:2",
    "1:3",
    "2:3"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2rfbe74MOd6gfGEjDKJNroyyeeGuTfVh_j7DyT2l09Ihw5-UOGxQDeMA5AU0Dp4zxz62hQD3wo1PvdZ92s1SNgQFDJEY7fRLIFQwDkMUpZHzvR5ccNQyIg4f5oD1ksSnVSoAxS10Kvdf2CfD-cgJlWnUZJeUHR6VVi5utUudomLsXFi3J9yIzi5AB/s1744/question%208.jpg',
    },
    {
    numb: 9,
    question: "यदि कोई पुस्तक 25% हानि पर बेची जाती है, तो क्रय मूल्य का विक्रय मूल्य से अनुपात है :",
    answer: "4:3",
    options: [
    "4:3",
    "2:3",
    "1:4",
    "4:2"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf-o2Cnq1Gb7tdrILnJJKjlIA-JM7wR_RJjhlzxru5Y6rsO_qxewFLYHjClm5BTO7BJyEW9XyRBP_sMnPNkfjVsiyCv153o8hIfIuyLoQDO8jnpvHFB76-4i7c8pkAsFFuxxfdJkcmtfQTIxUC2rhdm0HMZF5EtumOGVZ5rL9yN1cgURBV17eQgnyT/s1599/question%209.jpg',
    },
    {
    numb: 10,
    question: "यदि एक सेब की लागत मूल्य उसके विक्रय मूल्य का ৪0% है, तो लाभ प्रतिशत ज्ञात करें।",
    answer: "25%",
    options: [
    "23%",
    "40%",
    "25%",
    "65%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSh7Ad588AGBLsinwOXyZdrQIWseb6Cr9-V_ZqPfUMxYnJKMC2-PTg1n2-d4v5PqjJYEImeZdXc_AyYWCHxEg-HUk-VwYWMfyt1y0BZU7M73eFLAaneDbfecQxBEc0rDkGf6C__1FBKIt5qpkdGV77YjoqwtZ-J2Pl6N5vuCkPOhQa4XchPn11uMdv/s1919/question%2010.jpg',
    },
    {
    numb: 11,
    question: "₹ 450 के लिए एक किताब बेचकर मैं 20% खो देता हूँ। किस राशि के लिए मुझे इसे 20% हासिल करने के लिए बेचना चाहिए।",
    answer: "675",
    options: [
    "544",
    "864",
    "675",
    "467"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1XfGRxp0TE8ZdRdB3tKn3LPeakLBqSYUwcQum7fLfbzp2NUdWAPA7MUsWfud7wLNesQmF5BKuQwqHErEhej4VqIzx1b8zl1DVa561v4_AucfJoakdmgD11ERAzDDWrdqGBlT1mTGVuIiJWYiP8EFe3VtDQznJ1UBO5KsMFL9NNQAedNm-fsCjKGJ/s2014/question%2011.jpg',
    },
    {
    numb: 12,
    question: "जब कोई वस्तु 355 रूपए में बेची जाती है तो 29% की हानि होती है तो 21% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए? (ssc cgl tier-2, 11 september 2019)",
    answer: "605",
    options: [
    "605",
    "655",
    "600",
    "624"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtxuIz4nuSNHa8MlWtIiLEjlNO84zIUAQ9JAEpFO6BNyzam0JlCUCMZ6D7jB1aHM1h6CMFY5nsdG1gwEgUFTJ8b4A4tjJZnNhylShH72iEBIUht5NX4FBICml7gX318iFh9cU0cdYeYEX4n0VKcvDyI3gd7EYXfCrgXMV56vjnQFXujhIR7CLCY4HN/s1939/question%2012.jpg',
    },
    {
    numb: 13,
    question: "यदि एक वस्तु को 355 रुपये में बेचा जाता है, तो 29% की हानि होती है। 31% लाभ प्राप्त करने के लिए इसे किस कीमत पर (रु में) बेचा जाना चाहिए? (SSC CGL MAINS 29 Jan 2022)",
    answer: "655",
    options: [
    "655",
    "458",
    "754",
    "355"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq_xXj5zfFIGmE0lst5q9YmpdXzTLYXIaINVRBn2EtTGTSREdfd4pM5c3cfOwluQ3l-vylNtfLq4WAxD-7L5z38c3kTFDVWShUnZt4uu686WPmkgAgt6TurmZqw3hFgTKb3vQ52gH3O1M8pWYukd6Hj0SL1vUZ6wNf1YPFwejvETtOGkHWWipwf2ZK/s2155/13.jpg',
    },
    {
    numb: 14,
    question: "एक वस्तु 10% की हानि पर ₹ 810 में बेची जाती है। यदि हानि 20% है तो विक्रय मूल्य कितना होना चाहिए? ssc mts 2 august 2019 (evening)",
    answer: "720",
    options: [
    "456",
    "865",
    "720",
    "665"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2iSoppju3pCO-51a4d1AG-Nab1YMIUHCTGef_E1YMaPKkVfsHAWdLV0Jtnm-CW4Lw4KF8D9Ebl0Eth5rNOXIo2rksK1vm-9i8lQhMFHrfT0tgieoB5b8itvOYEcqvLel-MwbICjZid1bgm32G9UHuOzpld6XSZQyL-g0GHcT_ZXBugZtI9pk1XkrQ/s1967/14.jpg',
    },
    {
    numb: 15,
    question: "जब कोई वस्तु ₹480 में बेची जाती है तो 16⅔% की हानि होती है तो ৪⅓% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए?",
    answer: "624",
    options: [
    "345",
    "415",
    "344",
    "624"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7o9QG7OpeXaXjAtgM-0Si5BhLASDRFpWJVAbGAf1KIIPuUm_sZda2cJ-D3039yvcdw7kGsnlzukscgeBl23QsPDPgIDjYEKhFx0WMJE_jsxjJlUA9D6XZS4rdLGiX1zpWFNXb7Fgos9ddSEEMerir97S8Ql1LgA78X3WHEPYQUw6qhtn-qtNq_Spn/s1672/15.jpg',
    },
    {
    numb: 16,
    question: " जब कोई वस्तु ₹ 990 में बेची जाती है तो 11⅑% का लाभ होता है तो 9 <sup>1</sup> / <sub>11</sub> % की हानि के लिए इसे  किस कीमत पर बेचा जाना चाहिए?",
    answer: "810",
    options: [
    "345",
    "810",
    "800",
    "815"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmwWayjstlPTPI12mDH5-GyhYB7IWDKjcFBS4HVYw3U74SCeAP7iOQdGBfqL6gn6z0plpYZGCHqfHLn4DyZ6we7z9Mhun9azMsmdUec-Vr4ZBRjdek7LRWEBziY969pZPT1BZvbmvEjZhnl8QL4vfMplNVXj9tDO5goEMiqd7F6fBf-r9LvgXfeun4/s2427/16.jpg',
    },
    {
    numb: 17,
    question: " जब कोई वस्तु ₹ 1050 में बेची जाती है तो 12½% की हानि होती है तो 25% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए?",
    answer: "1500",
    options: [
    "1500",
    "457",
    "1109",
    "1200"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI3-bAQc0N5RyCDEadcY4cUKgCYW_aaoBSCffRwfe3DDpyCm3iRVb2GIqXGPCJNLbKTQO4ccNZghx1QL-dcj6Yxdnt_BzeG7oXSEzbcF5Y0ePwGo-W-ju3pfev_fQuuxNuZmYinKpzdLQ6ZOUNRn-ABpSviHDWdSXCx3d4j6SDahUBIr3f-3QHhAS3/s2315/17.jpg',
    },
    {
    numb: 18,
    question: "एक वस्तु को Rs.2,200 में बेचने पर 10% का लाभ प्राप्त होता है। यदि इस वस्तु को Rs.2,600 बेचा गया होता, तो लाभ प्रतिशत क्या होता? (SSC CGL MAINS 03 Feb 2022)",
    answer: "30%",
    options: [
    "20%",
    "30%",
    "45%",
    "25%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgwAIAGj2Crd6OeDI3waz2w-lFQlvyWXduHeyYZVRxDJMoIagjCjDZf--RpyrSZIOdFgXKZHcdpHPLhU5PSRLgtOPDp7jQ4znjtmYpqsAgcmBTVsY2DQHrKFsuhwWUrVMxiEBaknvlgrzqQ8L0WTLRD0X8_I5jhqw_d-AJ1ymsJSC-LL8-d0GaEav2/s2115/18.jpg',
    },
    {
    numb: 19,
    question: "एक वस्तु 15% की लाभ पर ₹2070 में बेची जाती है । यदि लेख ₹ 1890 में बेचा जाता है, तो लाभ या हानि प्रतिशत क्या होगा? (ssc mts 2 august 2019 (evening))",
    answer: "5% gain",
    options: [
    "3% loss",
    "4% gain",
    "5% gain",
    "5% loss"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5VOEO5-Efrh5hQR-azAVipBUOGFLRoOxegPnErOAFPE4LIHpJKgF06esCO8TvQ22TiJJ26_hTgSTJvPzk8Ls9NwqBlnRnzbCAKDyoXG86XPHkgYetaTrju85mtyRYuQC23jnedSdpUTvtRtOAUODGKs8ILEiL40dvwtzaN-MpjLSFJjSH7vlRn4Ie/s2235/19.jpg',
    },
    {
    numb: 20,
    question: "विपिन ने एक खिलौना ₹1200 में खरीदा। इसकी मरम्मत पर उसने ₹200 खर्च किए, उसने इसे ₹ 1680 रुपये में बेच दिया। है, तो उसका लाभ प्रतिशत क्या है।",
    answer: "20%",
    options: [
    "30%",
    "22%",
    "43%",
    "20%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSP9FpTykaucmw2GwyBWKJlEeHB-kH0_r13ttGL_UHwg5x82_9wGfV13NNaA3IpI4rLTfD_BDBBmXSeZcqy5Cs4QHFZYpoFLWrS1HX4v4B5XTfrL_wwr5LSCp2fgnyRH4hyinIqUnuDxJGGsiPphTB47EI00w5IIjzleTyNET982Xqi_VUH4ySvjJV/s2335/20.jpg',
    },
    {
    numb: 21,
    question: "एक वस्तु की लागत मूल्य और वि्क्रय मूल्य के बीच का अंतर ₹ 360 है। यदि लाभ 20% है, तो विक्रय मूल्य क्या है?",
    answer: "2160",
    options: [
    "2160",
    "3417",
    "2450",
    "2311"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPZz66lhr11uKnmCw50NCosZJQi86dFYGRxvsS3sZ2wF8pENJhN9sq_NlR4yWH1rR0MBpPZR3nzl5OaKsCVpwszs4F0UsMt18AWYLuP-1XvPTbUcH-V9RlUYDZE4FokffTRYSkmn3463zOdeJFqPc_T0WfL6RD0BAVvmLxwdBM5MDOxOD5z4dHk-Zn/s2180/21.jpg',
    },
    {
    numb: 22,
    question: "एक बल्ला की लागत मूल्य और विक्रय मूल्य के बीच का अंतर ₹180 है। यदि लाभ 20% है, तो बल्ला का विक्रय मूल्य क्या है। {ssc mts 7 august 2019 (morning)}",
    answer: "1080",
    options: [
    "1080",
    "264",
    "1000",
    "1230"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj47UcY7i48vsFv0zceBTy39hU2MoZZugZmJn5Yy7080TlUbcryarhJz07DFzFfwiZSRa2Rz1sPOO-V3gBuEAp4aWv3_4cHYJDRsgqITpo4HACLYzs2hEX0oguLZ-pkRVaRt_vSyzJtZtj_rrdJmo5xgcLowJMh1Eb9TphdCWCcGz2sJWhwundtanMy/s1707/22.jpg',
    },
    {
    numb: 23,
    question: "जब कोई वस्तु 15% लाभ और 17% की हानि पर बेचीं जाती है तो इसके विक्रय मूल्य में ₹ 96 का अंतर आता है, यदि इसे 10% लाभ पर बेचा जाये तो विक्रय मूल्य क्या होगा? {ssc mts 8 august 2019 (morning)}",
    answer: "330",
    options: [
    "220",
    "440",
    "330",
    "520"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD-SRS-WmhuSHeTXqas86GAOwPLBondYyEo_QPrg-8ZXuD9E7kQTSRfTbPlpelzIdtgRggArBdeg1U8_n-yGl17-bj9lroQrFOIyhnvn-IQtpP-TpY9m8vKxozDCQiMkXVTyrBa7XpiPbw3beZthAnKbRJ6IhfFwJBaHy-aWvNlfIa6udyx-Wjidvi/s1792/23.jpg',
    },
    {
    numb: 24,
    question: "एक व्यक्ति ने 8% की हानि पर एक लेख बेचा। अगर उसने इसे 10.5% का लाभ बेचा तो। उन्हें ₹37 अधिक मिले। लेख की क्रय मूल्य क्या है? {ssc chsl 2 july 2019 (morning)}",
    answer: "200",
    options: [
    "300",
    "550",
    "200",
    "600"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOZyZOnU54H196wp16KBrem_JIPRIQAEunKp7nzGTc3u0lEjoHaQJ9v4fo2BMuIddjQjV0T3jD1CFUDgUcc8XtqWCNq7oGvd52ZRuhto5u5wIHNl1WGM_4w1mGA-FBb7TS_OgP_fyYj43QqTBxhxKxHVnH9aM6m_nlbRGzwHOyJp8c6erWEZQ4V09d/s1727/24.jpg',
    },
    {
    numb: 25,
    question: "एक वस्तु को 13¼%  के लाभ पर बेचा जाता है। अगर  इसे 76.70 रुपये अधिक में बेचा जाता, तो लाभ 16⅕%  होता। वस्तु के लागत मूल्य का 50% (रु में ) है: SSC CGL Pre 19.04.2022 (Afternoon)",
    answer: "1300",
    options: [
    "1500",
    "1300",
    "1200",
    "1000"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWBnHbprTmlhxNyVeOrnqhs52ecoKbDHvhqkQytJiWFRE-83cvlnnoucXGdv4Smh6EJxL0J5ME0-mQFWRcQ4RjCV_8vKcKlczyrNq6L4X9XzJPmjazmkuf_qjvN2KARdM7aUIcmfRsUlTN4eGkhggYB2UuPY8yQpvKYf6ErIUHBF78aXAJ9--RWUhc/s2421/25.jpg',
    },
    {
    numb: 26,
    question: "एक व्यक्ति ने एक वस्तु को 18% की हानि पर बेचा। यदि वह इसे 960 रुपये अधिक में बेचता, तो उसे 12% का लाभ होता। यदि वस्तु 3840 रुपये में बेची जाती है तो लाभ प्रतिशत कितना है? {SSC CGL 11.04.2022 (Evening)}",
    answer: "20%",
    options: [
    "24%",
    "23%",
    "30%",
    "20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 27,
    question: "जब एक वस्तु को 768 रुपये में बेचा जाता है, तो लाभ प्रतिशत x % होता है। जब उसी वस्तु को 896 रुपये में बेचा जाता है, तो लाभ प्रतिशत (x + 20)% होता है। x का मूल्य क्या है? {SSC MTS (Shift- II) 06/10/2021}",
    answer: "20",
    options: [
    "30",
    "20",
    "29",
    "50"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 28,
    question: "15 वस्तु की लागत मूल्य 10 वस्तु की विक्रय मूल्य के बराबर है। फिर लाभ या हानि प्रतिशत ज्ञात करें।",
    answer: "50%",
    options: [
    "30%",
    "60%",
    "50%",
    "20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 29,
    question: "यदि 40 लेखों की विक्रय मूल्य 50 लेखों की लागत मूल्य के बराबर है, तो प्रतिशत हानि या लाभ है: {ssc cgl 13 june 2019 (evening)}",
    answer: "25% gain",
    options: [
    "25% loss",
    "25% gain",
    "20% loss",
    "20% gain"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 30,
    question: "यदि 7 वस्तुओं का विक्रय मूल्य ৪ वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत ( एक दशमलव स्थान तक सही) क्या है? {SSC CGL MAINS 29 Jan 2022}",
    answer: "14.3%",
    options: [
    "12.5%",
    "13.5%",
    "14.3%",
    "5.6%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 31,
    question: "33 मीटर कपड़ा बेचकर राधे को 11 मीटर की लागत मूल्य का लाभ प्राप्त होता है। उसका लाभ प्रतिशत क्या है?",
    answer: "33.33%",
    options: [
    "33.33%",
    "14.28%",
    "40%",
    "23%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 32,
    question: "14 वस्तुओं बेचने पर एक व्यक्ति को 2 वस्तुओं के लागत मूल्य की हानि होती है। इसका हानि प्रतिशत क्या है? (एक दशमलवर स्थान तक)",
    answer: "14.3%",
    options: [
    "20%",
    "28%",
    "14.3%",
    "12%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 33,
    question: "25 मीटर कपड़ा बेचकर रिया 5 मीटर की बिक्री मूल्य हासिल करती है। उसका लाभ प्रतिशत क्या है?",
    answer: "25%",
    options: [
    "20%",
    "25%",
    "45%",
    "5%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 34,
    question: "72 लेखों को बेचने से, 8 लेखों की बिक्री मूल्य बराबर नुकसान हुआ। नुकसान प्रतिशत क्या है?",
    answer: "10%",
    options: [
    "15%",
    "28%",
    "10%",
    "22%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 35,
    question: "800 रुपये में दो लेख बेचकर, एक व्यक्ति 5 लेखों की लागत मूल्य का लाभ प्राप्त करता है। लाभ प्रतिशत है: {ssc cgl 13 june 2019 (evening)}",
    answer: "250%",
    options: [
    "200%",
    "150%",
    "100%",
    "250%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 36,
    question: "25 लेख बेचने के बाद, एक दुकानदार 5 लेखों की लागत मूल्य के बराबर लाभ कमाता है। अगर उसने कुल ৪০০ के लेख खरीदे हैं तो उसने उसे कितने में बेच दिया होगा ?",
    answer: "960",
    options: [
    "960",
    "907",
    "864",
    "380"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 37,
    question: "यदि कोई व्यक्ति विक्रय मूल्य पर अपने लाभ % की गणना करता है और उसके अनुसार, उसका लाभ 20% है। उसका वास्तविक लाभ% ज्ञात करें।",
    answer: "25%",
    options: [
    "30%",
    "22%",
    "25%",
    "15%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 38,
    question: "यदि कोई व्यक्ति विक्रय मूल्य पर अपने नुकसान प्रतिशत की गणना करता है और उसके अनुसार, उसका नुकसान 37.5% है। उसका वास्तविक नुकसान प्रतिशत ज्ञात कीजिये।",
    answer: "300/11%",
    options: [
    "300/11%",
    "200%",
    "32%",
    "100/3%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 39,
    question: "किसी वस्तु को ₹ 800 में बेचने पर एक व्यक्ति को इसके विक्रय मूल्य पर 20% की हानि होती है तो क्रय मूल्य पर 25% लाभ कमाने के लिए उसे इस वस्तु को किस कीमत पर बेचना चाहिए। {ssc cgl 4 june 2019 (evening)}",
    answer: "₹1250",
    options: [
    "₹1000",
    "₹1225",
    "₹1250",
    "₹1050"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 40,
    question: "कोई वस्तु 640 रू में बेचकर किसी व्यक्ति को वस्तु के विक्रय मूल्य पर 15% की हानि होती है। वस्तु के क्रय मूल्य पर 15% लाभ प्राप्त करने के लिए उसे वस्तु को किस मूल्य (रूपये में ) पर बेचना चाहिए? {SSC CGL 17.08.2021 (Morning)}",
    answer: "846.40",
    options: [
    "800",
    "767.4",
    "859.4",
    "846.40"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 41,
    question: "नीरज और दीपक 2 दोस्त हैं। नीरज विक्रय मूल्य पर अपने लाभ % की गणना करता है जबकि दीपक क्रय मूल्य पर अपने लाभ % की गणना करता है। यदि दोनों 20% लाभ कमाने का दावा करते हैं और दोनों के वास्तविक लाभ के बीच का अंतर ₹ 100 है एवं दोनों का विक्रय मूल्य समान है तो उनका विक्रय मूल्य ज्ञात करें।",
    answer: "3000",
    options: [
    "2500",
    "3100",
    "3000",
    "3280"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 42,
    question: "एक वस्तु को ₹13400 में बेचने से होने वाला लाभ, 11600 में उसी वस्तु को बेचने पर हुए नुकसान के बराबर है। अगर इसे ₹14,750 (₹ में ) बेचा जाता है तो क्या लाभ होगा। SSC CHSL 2019",
    answer: "2250",
    options: [
    "2250",
    "1200",
    "1125",
    "1250"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 43,
    question: "किसी वस्तु को 832 रुपये में बेचने पर अर्जित लाभ उस वस्तु को 448 रुपये में बेचने पर हुई हानि के बराबर है। यदि वस्तु को 10% हानि पर बेचा जाता है तो उसका विक्रय मूल्य क्या होगा? { SSC CGL 11.04.2022 (Afternoon) }",
    answer: "576",
    options: [
    "390",
    "576",
    "466",
    "422"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 44,
    question: "एक दुकानदार को किसी वस्तु को ₹ 455 में बेचने पर कुछ रुपये की हानि होती है। यदि वह इसे ₹ 490 में बेचता तो उसे हानि से चार गुने के बराबर लाभ होता। 25% लाभ प्राप्त करने के लिए उसे वस्तु को किस मूल्य पर (₹ में ) बेचना चाहिए?  {ssc cgl 24.08.2021}",
    answer: "577.5",
    options: [
    "300",
    "432.5",
    "325",
    "577.5"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 45,
    question: "एक महिला ने एक वस्तु को कुछ लाभ पर 960 रुपये में बेचा। अगर उसने इसे 800 रुपये में बेचा होता, तो शुरुआती लाभ के 1/3 के बराबर हानि हुई होती। वस्तु का लाभ प्रतिशत कितना था?  {SSC CGL MAINS 03 Feb 2022}",
    answer: "100/7%",
    options: [
    "100/7%",
    "300/7%",
    "100/3%",
    "14.28%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 46,
    question: "सुलेखा एक वस्तु को 870 में बेचती है, तो उसे जो लाभ (रु में ) प्राप्त होता है, वह 450 रूपये में बेचने पर हुई हानि (रु में) के दुगुने के बराबर होता है। 15% का लाभ अर्जित करने के लिए, उसे वस्तु को कितने में बेचना चाहिए? {SsC MTS (Shift- I) 12/10/2021}",
    answer: "678.50",
    options: [
    "678.50",
    "578",
    "600",
    "695.5"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 47,
    question: "अनु ने कुछ लाभ में ₹480 में एक लेख बेचा। अगर उसने इसे ₹400 में बेचा होता, तो शुरुआती लाभ के एक-तिहाई के बराबर नुकसान होता। लेख का लागत मूल्य क्या था?  {ssc cgl tier-2, 11/09/ 2019}",
    answer: "420",
    options: [
    "420",
    "432",
    "560",
    "321"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 48,
    question: "किसी वस्तु को ₹ 246.80 रुपये में बेचने पर लाभ ₹216 में बेचने पर हुई हानि से 20% अधिक है। यदि वस्तु को ₹220.75 में बेचा जाए तो लाभ / हानि प्रतिशत क्या है?  SSC CGL 2020 Tier-I",
    answer: "4% loss",
    options: [
    "5% loss",
    "4% loss",
    "4% profit",
    "5% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 49,
    question: "₹10 में 11 की दर से कुछ वस्तु खरीदी गयी और ₹11 में 10 के हिसाब से बेच दी। लाभ /हानि प्रतिशत ज्ञात कीजिए?",
    answer: "21% profit",
    options: [
    "21% profit",
    "40% loss",
    "30% loss",
    "33% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 50,
    question: "₹189 में 36 के हिसाब से कुछ वस्तु खरीदी। ₹ 189 में 45 के हिसाब से बेच दी। तो लाभ / हानि % ज्ञात कीजिए।",
    answer: "20% profit",
    options: [
    "21% loss",
    " 25 profit",
    "20% profit",
    "15% loss"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 51,
    question: "₹11 में 7 के हिसाब से कुछ संतरे खरीदें और ₹3 में 2 के हिसाब से बेच दिए, तो ₹ 30 की हानि हुई तो बताएँ उसने कितने संतरे बेचे?",
    answer: "420",
    options: [
    "432",
    "420",
    "300",
    "400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 52,
    question: "₹5 में 4 के हिसाब से कुछ संतरे खरीदे और ₹7 में 5 के हिसाब से बेच दिए, तो ₹ 18 का लाभ हुआ तो बताएँ उसने कितने संतरे बेचे?",
    answer: "120",
    options: [
    "120",
    "100",
    "140",
    "366"
    ],
    solution: 'img/1mg.png',
    },
    
    {
    numb: 53,
    question: "₹ 8 में 15 के हिसाब से कुछ सेब खरीदें और ₹ 2 में x के हिसाब से बेच दिए। तो 25% का लाभ हुआ । x का मान बताएँ।",
    answer: "3",
    options: [
    "3",
    "2",
    "6",
    "none"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 54,
    question: "₹7 में 9 के हिसाब से कुछ सेब खरीदी और ₹2 में   X के हिसाब से बेच दिए तो 14 <sup>2</sup>/<sub>7</sub>% की हानि हूुई। X का मान बताएँ। ",
    answer: "3",
    options: [
    "2",
    "1",
    "4",
    "3"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 55,
    question: "टॉफी ₹ 10 में 11 की दर से खरीदी गई। उतनी ही टॉफियाँ ₹ 10 में 9 के दर से खरीदी गई। पूरे भंडार को ₹1/टॉफी के हिसाब से बेच दिया। लाभ / हानि प्रतिशत ज्ञात कीजिए।",
    answer: "1% loss",
    options: [
    "2% loss",
    "1% loss",
    "3% profit",
    "1% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 56,
    question: "एक दुकानदार ने 5 रुपये में 4 की दर से 60 पेंसिलें खरीदीं और 60 पेंसिलें, 3 रुपये में 2 की दर से खरीदीं। उस ने सभी पेंसिलों को मिलाकर 4 रूपये में 3 की दर से बेच दिया। उसका लाभ या हानि प्रतिशत ज्ञात करें। SSC CGL 19.04.2022 (Evening)",
    answer: "loss 100/3%",
    options: [
    "loss 100/3%",
    "loss 14⅐%",
    "profit 6⅔%",
    "profit 20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 57,
    question: "एक दुकानदार 60 संतरे 72 रुपये में 10 की दर से खरीदता है, और समान संख्या 90 रुपये में 12 की दर से खरीदता है। वह लेनदेन पर 118 रुपये अतिरिक्त खर्च करता है। और वह सभी संतरे बेचता है जो वह खरीदता है। यदि पुरे लेन-देन में 26% का लाभ होता है, तो 32 संतरे का विक्रय मूल्य क्या है?  {SSC MTS (Shift- II) 27/10/2021}",
    answer: "₹336",
    options: [
    "₹345",
    "₹300",
    "₹400",
    "₹336"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 58,
    question: "अमिता 100 सेब 100.80 रुपये में 12 की दर से और 200 सेब 117 रुपये में 15 की दर से खरीदती है। यह पाया गया कि 10% सेब खराब हो गए थे। उसने सभी सेबों को 204 रुपये में 20 की दर से बेच दिया। पूरे लेनदेन में उसका लाभ प्रतिशत है: {SSC MTS (Shift- II) 14/10/2021}",
    answer: "14.75%",
    options: [
    "14.28%",
    "14.75%",
    "30%",
    "28%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 59,
    question: "एक आदमी ने कुछ संतरे 5 संतरे ₹1 की दर से, समान संतरे 4 संतरे ₹ 1 की दर से खरीदें। उसने सभी संतरे 9 संतरे ₹2 की दर से बेच दिए। इन सब में उसको ₹ 30 की हानि हुई, संतरों की संख्या ज्ञात करें?",
    answer: "10800",
    options: [
    "3987",
    "10000",
    "10800",
    "3600"
    ],
    solution: 'img/1mg.png',
    },
    
    {
    numb: 60,
    question: " ₹ 20 में 6 के दर से कुछ वस्तु खरीदी और ₹26 में 8 के दर से उससे दोगुनी वस्तु खरीदी। दोनों को मिलाकर ₹118 रुपए में 24 के दर से बेच दिया गया। लाभ /हानि प्रतिशत ज्ञात कीजिए।",
    answer: "50% profit",
    options: [
    "50% profit",
    "30% loss",
    "42% loss",
    "25% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 61,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 62,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 63,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 64,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 65,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 66,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 67,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 68,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 69,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 70,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 71,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 72,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 73,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 74,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 75,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 76,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 77,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 78,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 79,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 80,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 81,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 82,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 83,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 84,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 85,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 86,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 87,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 88,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 89,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 90,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 91,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 92,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 93,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 94,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 95,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 96,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 97,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 98,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 99,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 100,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 101,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 102,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 103,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 104,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 105,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 106,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 107,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 108,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 109,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 110,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 111,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 112,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 113,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 114,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 115,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 116,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 117,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 118,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 119,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 120,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 121,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 122,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 123,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 124,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 125,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 126,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 127,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 128,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 129,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 130,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 131,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 132,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 133,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 134,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 135,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 136,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 137,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 138,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 139,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 140,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 141,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 142,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 143,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 144,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 145,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 146,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 147,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 148,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 149,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 150,
    question: " ",
    answer: "",
    options: [
    "",
    "",
    "",
    ""
    ]
    },
    
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
    ];
    
    
    
 

    // Inside this JavaScript file I've coded all Quiz Codes 
  
    //selecting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    const option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");
    
    const chap_name_txt = document.querySelector(".chap_name_txt");
    
    // if startQuiz button clicked""
    start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    chap_name_txt.style.display = "block";
    }
    
    // if exitQuiz button clicked
    exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    }
    
    // if continueQuiz button clicked
    continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(120); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
    chap_name_txt.style.display = "none";
    
    }
    
    let timeValue =  120;
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    let counter;
    let counterLine;
    let widthValue = 0;
    
    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");
    
    // if restartQuiz button clicked
    restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 120; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    }
    
    // if quitQuiz button clicked
    quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
    }
    
    const sol_btn = document.querySelector("section .sol_btn");
    const next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");
    
    // if Next Que button clicked
    next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    sol_btn.style.display = "none";
    a.style.display = "none";
    back_btn.style.display = "block";
    timeText.style.color = "black";
    time_line.style.background = "#48e81c";
    }else{
    back_btn.style.display = "block";
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
    }
    }
    
    
    const back_btn = document.querySelector("section .back_btn");
    // if previous Que button clicked
    back_btn.onclick = ()=>{
    if(que_count >  0){ //if question count is less than total question length
    que_count--; //increment the que_count value
    que_numb--; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
     clearInterval(counter); //clear counter
     clearInterval(counterLine);//clear counter
     
    back_btn.style.display = "block";
    sol_btn.style.display = "block";
    a.style.display = "none";
    timeText.style.color = "black";
    time_line.style.background = "#48e81c";
    }
    else{
    back_btn.style.display = "none";
    }
    }
    
   
    
    
    
    
    
    // getting questions and options from array
    function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    
    let solutionImage = document.querySelector(".solution .sol_img");
    
    let sol_tag = questions[index].solution;
    solutionImage.src = sol_tag;
    
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
    }
    }
    // creating the new div tags which for icons
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
    
    //if user clicked on option
    function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
    sol_btn.style.display = "block";
    back_btn.style.display = "block";
    }else{
    back_btn.style.display = "block";
    sol_btn.style.display = "block";
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");
    
    for(i=0; i < allOptions; i++){
    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    console.log("Auto selected correct answer.");
    }
    }
    }
    for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    }
    
    function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
    let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
    let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
    }
    }
    
    function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if(time < 9){ //if timer is less than 9
    let addZero = timeCount.textContent; 
    timeCount.textContent = "0" + addZero; //add a 0 before time value
 
    time_line.style.background = "red";
    }
    if(time < 0){ //if timer is less than 0
    clearInterval(counter); //clear counter
    timeText.textContent = "Time Off"; //change the time text to time off
    const allOptions = option_list.children.length; //getting all option items
    let correcAns = questions[que_count].answer; //getting correct answer from array
    sol_btn.style.display = "block";
    for(i=0; i < allOptions; i++){
    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    console.log("Time Off: Auto selected correct answer.");
    }
    }
    for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    }
    }
    }
    
    function startTimerLine(time){
    counterLine = setInterval(timer, 323);
    function timer(){
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if(time > 549){ //if time value is greater than 549
    clearInterval(counterLine); //clear counterLine
    }
    }
    }
    
    function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
    }
    