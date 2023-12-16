const data = {
  ঢাকা: [
    "ঢাকা সদর",
    "গুলশান",
    "বনানী",
    "কোনা পুর",
    "মোতিজিল",
    "মিরপুর",
    "দানমণ্ডি",
    "হাজারীবাগ",
    "পল্টন",
    "মোহাম্মদপুর",
    "কামরাঙ্গীরচর",
    "সাভার",
    "ধামরাই",
    "ডোহার",
    "কেরাণীগঞ্জ",
    "নরসিংদী",
    "মুন্সিগঞ্জ",
    "রূপগঞ্জ",
    "গজরিপুর",
  ],
  চট্টগ্রাম: [
    "চাকরিয়া",
    "ফটিকছড়ি",
    "করণছড়ি",
    "হাটহাজারী",
    "সোনাগাজী",
    "বাংগানভবন",
    "বোয়ালখালী",
    "চন্দনাইশ",
    "সতকানিয়া",
    "আনওয়ারা",
    "রাউজান",
    "বোয়ালখালী সদর",
    "সিটাকুন্দি",
    "পাটিয়া",
    "রাঙ্গুনিয়া",
    "লোহাগাড়া",
    "মীরসরাই",
    "বন্দরবান",
    "ফেনী",
    "রাউয়ান্দচড়ি",
    "লক্ষ্মীপুর",
    "নোয়াখালী সদর",
    "বেগমগঞ্জ",
    "রামু",
    "হাতিয়ারী",
    "মোহেশখালী",
    "শাহবাজপুর",
    "চকরিয়াদহ",
    "হোমনা",
    "দোমপাড়া",
    "সরাইন্দা",
    "মাটিয়ারী",
    "বান্দর",
    "ফোয়ারিচবাড়ি",
  ],
  খুলনা: [
    "খুলনা সদর",
    "বটিয়াঘাটা",
    "মোনগলা",
    "দৌলতপুর",
    "কয়রা",
    "পাইকগাছা",
    "রুপসা",
    "পাইকগাছা উপজেলা",
  ],
  সিলেট: [
    "সিলেট সদর",
    "মাউলভীবাজার",
    "শ্রীমঙ্গল",
    "হবিগঞ্জ",
    "বিশ্বনাথ",
    "বালাগঞ্জ",
    "বিয়ানী বাজার",
    "গোয়াইনঘাট",
    "গোলাপগঞ্জ",
    "জকিগঞ্জ",
  ],
  বরিশাল: [
    "বরিশাল সদর",
    "বাকেরগঞ্জ",
    "বানারীপাড়া",
    "ভোলা সদর",
    "দৌলতখান্দ",
    "গৌরনদী",
    "জালকাঠি সদর",
    "মুলাদি",
  ],
  রাজশাহী: [
    "বগুড়া",
    "চারঘাট",
    "পুঠিয়া",
    "পবা",
    "বাঘা",
    "মোহনপুর",
    "গোদাগাড়ি",
    "তানোর",
    "পুঠিয়া",
    "বাগমারা",
  ],
  খাগড়াছড়ি: [
    "আদ্রষ্য তালুক",
    "কাপ্তাই তালুক",
    "খাগড়াছড়ি সদর তালুক",
    "দীঘিনালা তালুক",
    "পানছড়ি তালুক",
    "মহালছড়ি তালুক",
  ],
  ময়মনসিংহ: [
    "ময়মনসিংহ সদর",
    "গফরগাঁও",
    "নান্দাইল",
    "ত্রিশাল",
    "মুক্তাগাছা",
    "ফুলবাড়ী",
    "গৌরীপুর",
    "জামালপুর",
  ],

  রংপুর: [
    "বদরগঞ্জ",
    "টেকনাফ",
    "গঙ্গাচড়া",
    "কোটচাঁদপুর",
    "মিঠাপুকুর",
    "পিরগঞ্জ",
    "রংপুর সদর",
    "তরগাছ",
    "পীরগঞ্জ",
  ],

  কুমিল্লা: [
    "কুমিল্লা সদর",
    "চাঁদপুর",
    "দেবীদ্বার",
    "বরুড়া",
    "ব্রাহ্মণপাড়া",
    "চকর",
    "দাউদকান্দি",
    "দেবিদ্বার",
    "হোমনা",
    "কুমারখালী",
    "লাকসাম",
    "মুরাদনগর",
    "নাংলা",
    "পাকুনিয়া",
    "রাউজান",
    "সাদর দক্ষিণ",
    "সদর উত্তর",
    "মুরাদনগর উত্তর",
  ],
  ফেনী: [
    "ফেনী সদর",
    "ফরিদগঞ্জ",
    "সোনাগাজী",
    "সোনাগাজী এইরাছি",
    "ছাগলনাইয়া",
    "পরশুরাম",
    "দাগনভুইয়া",
  ],
  মউলভীবাজার: [
    "মউলভীবাজার সদর",
    "মউলভীবাজার শেরপুর",
    "কুলাউড়া",
    "বরকল",
    "কমলগঞ্জ",
    "জুরাইছড়ি",
    "রাজনগর",
  ],
  বাগেরহাট: [
    "বাগেরহাট সদর",
    "চৌমুহনী",
    "ফাকিরহাট",
    "মোল্লা পারক",
    "রামপাল",
    "মোনাকোশিয়াল",
    "সরুপকাঠি",
    "সারিয়াতপুর",
    "গামদা",
    "মুলাদী",
    "মোংলা",
    "বরগুনা",
    "পাঠরঘাটা",
    "চরভঙ্গা",
    "দুর্গাপুর",
    "কচুয়া",
    "মাংসোয়ালি",
    "রামখনদল",
    "শরণখোলা",
  ],
  পটুয়াখালী: [
    "পটুয়াখালী সদর",
    "দুমকি",
    "কলাপাড়া",
    "মির্জাগঞ্জ",
    "বাউফল",
    "রাঙ্গাবালী",
    "দশমিনা",
    "বাহাদুরপুর",
  ],
  নড়াইল: [
    "নড়াইল সদর",
    "বড়গঞ্জ",
    "দেবহাটা",
    "দোমার",
    "কালামদান্দা",
    "কাপাশিয়া",
    "কলাইন",
    "লোহাগড়া",
    "নারাইল সদর",
    "শালিখা",
  ],
  গাজীপুর: [
    "গাজীপুর সদর",
    "কালিয়াকৈর",
    "শ্রীপুর",
    "কালিয়াকৈর",
    "কালিয়াকৈর উত্তর",
    "কালিয়াকৈর দক্ষিণ",
    "সিমুলিয়া",
    "কালিয়াকৈর উত্তর",
    "সিমুলিয়া",
    "কালিয়াকৈর দক্ষিণ",
    "কালিয়াকৈর",
    "কাপাসিয়া",
    "বাসান্তেক",
    "কালিয়াকৈর দক্ষিণ",
    "কালিয়াকৈর",
    "বাসান্তেক",
    "কালিয়াকৈর উত্তর",
    "কালিয়াকৈর দক্ষিণ",
    "কাপাসিয়া",
    "কালিয়াকৈর উত্তর",
    "শ্রীপুর",
    "গাজীপুর সদর",
    "তাংইল",
    "শ্রীপুর",
    "গাজীপুর সদর",
    "তাংইল",
  ],
  শরীয়তপুর: [
    "ভোলা",
    "শরীয়তপুর সদর",
    "দক্ষিণ বরঘুনা",
    "তোড়া উপজেলা",
    "জজিরা",
    "ভেদরগঞ্জ",
    "রায়পুর",
    "দক্ষিণ শরীয়তপুর",
    "গোসাবা",
  ],
  স্যাটক্ষী: [
    "স্যাটক্ষী সদর",
    "বালুকিয়া",
    "চৌহালি",
    "দামুদ্যা",
    "দেভলা",
    "গোপালগঞ্জ",
    "কাশিনাথপুর",
    "কাউনিয়া",
  ],
  নারায়ণগঞ্জ: [
    "নারায়ণগঞ্জ সদর",
    "রূপগঞ্জ",
    "কলিয়াকৈর",
    "সোনারগাঁ",
    "বন্দর",
    "আরাইহাজারী",
    "বরুইপুর",
    "সিদ্ধিরগঞ্জ",
    "নওগাঁ",
    "বেলাবো",
    "মনোহরদী",
    "ফতুয়া",
    "শিবপুর",
    "সদরপুর",
    "মাদারীপুর",
    "ভদ্রাইগঞ্জ",
  ],
  জামালপুর: [
    "আলাপাড়া",
    "বকশীগঞ্জ",
    "বাকেরগঞ্জ",
    "ইসলামপুর",
    "জমালপুর সদর",
    "মধুবানীগঞ্জ",
    "মেলান্দহ",
  ],
  পাবনা: [
    "আটঘরিয়া",
    "বেরা",
    "ভাঙ্গুড়া",
    "দাঘাই",
    "ঈশ্বরদী",
    "কাহালু",
    "পাবনা সদর",
    "সাঁথিয়া",
    "সুজানগর",
    "উড়ি",
  ],
  বরগুনা: [
    "বরগুনা সদর",
    "বেতাগী",
    "বাকেরগঞ্জ",
    "সwartia",
    "আমতলী",
    "তালকুপা",
    "গোসাবা",
    "মহেশপুর",
    "পাথরঘাটা",
  ],
  ঝালকাঠি: [
    "ঝালকাঠি সদর",
    "কাঠলিয়ার থানা",
    "রাজাপুর থানা",
    "নলছিতি থানা",
    "বেটাগি থানা",
    "করাপাটিয়া থানা",
  ],
  পিরোজপুর: [
    "পিরোজপুর সদর",
    "বেড়বাচ্চা",
    "ভোলাকোট",
    "কাউরাখালী",
    "দুমকী",
    "গলাচিপা",
    "নাজিরপুর",
  ],
  টাঙ্গাইল: [
    "টাঙ্গাইল সদর",
    "কালিহাতী",
    "ঘাটাইল",
    "মির্জাপুর",
    "বাসাইল",
    "গোপালগঞ্জ",
    "ভূইয়া",
  ],
  কিশোরগঞ্জ: [
    "কিশোরগঞ্জ সদর",
    "পাকুন্দিয়া",
    "কর্ণলী",
    "আষ্টাদী",
    "কোটালীপাড়া",
    "তিতাস",
    "মিরপুর",
  ],
  সাতক্ষীরা: [
    "সাতক্ষীরা সদর",
    "টোলীন",
    "কলারোয়ান",
    "আসাশুনি",
    "কালিগঞ্জ",
    "শ্যামনগর",
    "দেবহাটা",
  ],
  মাদারীপুর: [
    "মাদারীপুর সদর",
    "কালকিনী",
    "রাজাইর",
    "শিবচর",
    "কাউনিয়া",
    "মাদারীপুর সদর",
  ],
  চাঁদপুর: [
    "চাঁদপুর সদর",
    "শাহরাস্তি",
    "হাইমচর",
    "মতলব",
    "ফরিদগঞ্জ",
    "হাজীগঞ্জ",
  ],
  কুড়িগ্রাম: [
    "কুড়িগ্রাম সদর",
    "কুড়িগ্রাম মহকুমা",
    "রাজারহাট",
    "ফুলছড়ি",
    "চর রাজীবপুর",
    "বেগুনবাড়ি",
    "পলাশবাড়ী",
    "ভুরুঙ্গামারী",
    "বরাবরিয়া",
  ],
  বরকেল: [
    "আগৈলঝা",
    "বাকেরগঞ্জ",
    "বরগুনা",
    "বেটাগি",
    "ভোলা",
    "জগন্নাথপুর",
    "পাটুয়া",
    "পিরোজপুর",
  ],
  ঠাকুরগাঁও: [
    "ঠাকুরগাঁও সদর",
    "আসানগাঁও",
    "আসানগাঁও উত্তর",
    "বালিয়ারহাট",
    "গোয়াইনঘাট",
    "পটুয়াখালী সদর",
    "দুমকিরছড়ি",
    "রংবাঙ্গা",
    "মির্জাগঞ্জ",
  ],
  ঝিনাইদহ: [
    "ঝিনাইদহ সদর",
    "কালিগঞ্জ",
    "মহেশপুর",
    "শৈলকুপা",
    "বোটি আলংদর",
    "হরিনাকুন্দু",
    "সরুপকাঠিয়া",
    "কোটোয়ালী",
  ],
  হবিগঞ্জ: [
    "আজমিরগঞ্জ",
    "বাহুবলগঞ্জ",
    "বান্দরগঞ্জ",
    "চুনারুঘাট",
    "হবিগঞ্জ সদর",
    "লাখাই",
    "মধবপুর",
    "নবীগঞ্জ",
    "শায়েস্তাগঞ্জ",
  ],
  নেত্রকোণা: [
    "আটঘরিয়া",
    "বারড়িবাঁদর",
    "দুর্গাপুর",
    "কলমা",
    "কেন্দুয়া",
    "মদন",
    "পুয়ারি",
    "রাতনগঢ়",
    "শিবপুর",
  ],
  মাগুরা: [
    "মাগুরা সদর",
    "মোহাম্মদপুর",
    "শালিখা",
    "স্রীমংলা",
    "শরীয়তপুর",
    "ময়দান",
    "জামদা",
  ],
  কক্সবাজার: [
    "চকরিয়া",
    "রামু",
    "উখিয়া",
    "তেকনাফ",
    "পেকুয়া",
    "মহেশখালী",
    "কুতুবদিয়া",
    "উপশহর",
    "পটুয়াখালী",
  ],
  ব্রাহ্মণবাড়িয়া: [
    "সাদুল্লাপুর",
    "নবীগঞ্জ",
    "আখাউড়া",
    "শাহজাদপুর",
    "বিমানবন্দর",
    "নাসিরনগর",
    "সরাইল",
    "অশুগঞ্জ",
    "বাঞ্ছারামপুর",
    "মুরাদনগর",
    "ব্রাহ্মণবাড়িয়া সদর",
    "আখাউড়া তৌলীত",
    "নালিতাবাড়ি",
    "নগরকাণ্ডা",
    "সরলা",
    "কসবা",
    "আশুগঞ্জ",
    "অজমিরিগঞ্জ",
    "হোজাইনগঞ্জ",
    "কটিহার",
    "আখাউড়া উত্তর",
  ],
  পাঞ্চগড়: [
    "আটঘরিয়া",
    "চুরুলিয়া",
    "দক্ষিণ দিনাজপুর",
    "কাহারোল",
    "মহাড়পুর",
    "দুর্গাপুর",
  ],
};

export default function AllPoliceStationsData() {
  return data;
}