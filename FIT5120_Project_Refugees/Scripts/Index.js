
var isChinese = false;

var language = document.getElementById("language");
var aboutUs = document.getElementById("aboutUs");
var findSport = document.getElementById("findSport");
var englishTranslate = document.getElementById("englishTranslate");
var chineseTranslate = document.getElementById("chineseTranslate");
var slogan = document.getElementById("slogan");
var importanceTitle = document.getElementById("importanceTitle");
var importanceContent = document.getElementById("importanceContent")
var mentalHealthTitle = document.getElementById("mentalHealthTitle");
var mentalHealthContent = document.getElementById("mentalHealthContent");

var socialAttributeTitle = document.getElementById("socialAttributeTitle");
var socialAttributeContent = document.getElementById("socialAttributeContent");


var analyticsTitle = document.getElementById("analyticsTitle");
var analyticsContent = document.getElementById("analyticsContent");

chineseTranslate.addEventListener("click", function () {
    slogan.innerHTML = "刚到澳大利亚？寻找属于你的运动吧！";
    importanceTitle.innerHTML = "为什么它如此重要?";
    importanceContent.innerHTML = "如果您是一名刚刚来到澳大利亚的难民，在这里您将可以通过体育来扩大你的社交圈，结交新的朋友，克服语言障碍，并拥有全新的，更丰富精彩的生活。挥洒你的汗水，我们共同前行!";

    socialAttributeTitle.innerHTML = "社交";
    socialAttributeContent.innerHTML = "除了健康的身体，人际关系是幸福最重要的基础。通过体育和它所具有的社会性，运动可以成为你结交新朋友最好的途径。无论您将参与团队运动还是个人竞技，即便是与竞争对手，沟通和交流都是必不可少的。如果你想拓展社交网络，提高人际交往能力，甚至只是想找人聊聊天，体育运动都是实现这一目标的最佳方式";

    mentalHealthTitle.innerHTML = "心理健康";
    mentalHealthContent.innerHTML = "根据相关研究，“就大脑的物理变化而言，运动时你的大脑将释放多巴胺和血清素。你患抑郁症的风险因此降低了30% 此外，由于运动所具有的独特的竞争性，你可以在运动中找到成就感和自我认同，从而同时提高你的幸福感和自信心。"

    analyticsTitle.innerHTML = "世界";
    analyticsContent.innerHTML = "根据澳大利亚政府内政部2016 - 2019年的难民统计数据，难民最多的9个国家是伊拉克、叙利亚、缅甸、阿富汗、刚果民主共和国、埃塞俄比亚、厄立特里亚、伊朗和中非共和国。来自这些地区的难民占澳大利亚难民总人数的76%";

    language.innerHTML = "语";
    aboutUs.innerHTML = "关于我们";
    findSport.innerHTML = "寻找运动";


})


englishTranslate.addEventListener("click", function () {
    slogan.innerHTML = "New to Australia? Find Your Sport !！";
    importanceTitle.innerHTML = "Why Is It So Important ?";
    importanceContent.innerHTML = "As a refugee, You will have a great chance to expand your social circle, get a group of friends, overcome language barrier and live a better life here in Australia, through sports. sprinkle your sweat, and we move on together!";

    socialAttributeTitle.innerHTML = "Social Attributes";
    socialAttributeContent.innerHTML = "Outside of physical health, relationships are the most important foundation ofHappiness and sports can be your way making friends.Sports is necessarily social.Whether you play a team game or a solo game, you communicate, even with the competitor.If you want to expand social networkings, improve interpersonal skills, or even just have a small talk with someone,Sorts is one of the best tools to achieve this";
    mentalHealthTitle.innerHTML = "Mental Health";
    mentalHealthContent.innerHTML = "According to relavent research, “in terms of physical changes in the brain, sport releases dopamine and serotonin. As a result, your risk of depression is reduced by up to 30%” Moreover, due to the competitive nature of sports, you can find a sense of achievement and self worth when playing sports, which therefore boost your well - being and confidence";


    analyticsTitle.innerHTML = "The World";
    analyticsContent.innerHTML = "According to the Australian Government Department of Home Affairs refugees statistics from 2016 to 2019, the top 9 refugee-importing countries are Iraq, Syria, Myanmar, Afghanistan, Democratic Republic of Congo, Ethiopia, Eritrea, Iran, Central African Republic accounting for 76% of the total refugee population.";

    language.innerHTML = "Language";
    aboutUs.innerHTML = "About Us";
    findSport.innerHTML = "Find Sport";

})




