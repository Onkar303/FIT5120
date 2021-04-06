
var language = document.getElementById("language");
var analytics = document.getElementById("analytics");
var home = document.getElementById("home");
var englishTranslate = document.getElementById("englishTranslate");
var chineseTranslate = document.getElementById("chineseTranslate");
var slogan = document.getElementById("slogan");
var importanceTitle = document.getElementById("importanceTitle");
var importanceContent = document.getElementById("importanceContent")
var mentalHealthTitle = document.getElementById("mentalHealthTitle");
var mentalHealthContent = document.getElementById("mentalHealthContent");

var socialAttributeTitle = document.getElementById("socialAttributeTitle");
var socialAttributeContent = document.getElementById("socialAttributeContent");

var weCare = document.getElementById('weCare');
var hereToHelpYou = document.getElementById('hereToHelpYou');
var helpContent = document.getElementById('helpContent');

var findSport = document.getElementById('findSports');
var refugeeStats = document.getElementById('refugeeStats');

var details = document.getElementById("details");
var details1 = document.getElementById("details1");

var compare = document.getElementById("compare");




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

    //analyticsTitle.innerHTML = "世界";
    //analyticsContent.innerHTML = "根据澳大利亚政府内政部2016 - 2019年的难民统计数据，难民最多的9个国家是伊拉克、叙利亚、缅甸、阿富汗、刚果民主共和国、埃塞俄比亚、厄立特里亚、伊朗和中非共和国。来自这些地区的难民占澳大利亚难民总人数的76%";

    language.innerHTML = "语";
    home.innerHTML = "家";
    analytics.innerHTML = "谁是难民?";
    compare.innerHTML = "相比";

    weCare.innerHTML = "我们关心";
    hereToHelpYou.innerHTML = "在这里为您提供帮助";
    helpContent.innerHTML = "在来到新国家时，新来的澳大利亚人由于文化冲击和社会孤立而感到不知所措。幸运的是，体育是一种全球性的语言，可以帮助人们从不同的背景进行交流。我们的目标是通过本地体育文化确保您感受到归属感的需要，以帮助您融入社区。";

    findSport.innerHTML = "寻找运动";
    refugeeStats.innerHTML = "难民统计";
    details.innerHTML = "点击查看更多详细信息";
    details1.innerHTML = "点击查看更多详细信息";

    isChinese = true;


})


englishTranslate.addEventListener("click", function () {
    slogan.innerHTML = "New to Australia? Find Your Sport !！";
    importanceTitle.innerHTML = "Why Is It So Important ?";
    importanceContent.innerHTML = "As a refugee, You will have a great chance to expand your social circle, get a group of friends, overcome language barrier and live a better life here in Australia, through sports. sprinkle your sweat, and we move on together!";

    socialAttributeTitle.innerHTML = "Social Attributes";
    socialAttributeContent.innerHTML = "Outside of physical health, relationships are the most important foundation ofHappiness and sports can be your way making friends.Sports is necessarily social.Whether you play a team game or a solo game, you communicate, even with the competitor.If you want to expand social networkings, improve interpersonal skills, or even just have a small talk with someone,Sorts is one of the best tools to achieve this";
    mentalHealthTitle.innerHTML = "Mental Health";
    mentalHealthContent.innerHTML = "According to relavent research, “in terms of physical changes in the brain, sport releases dopamine and serotonin. As a result, your risk of depression is reduced by up to 30%” Moreover, due to the competitive nature of sports, you can find a sense of achievement and self worth when playing sports, which therefore boost your well - being and confidence";


    //analyticsTitle.innerHTML = "The World";
    //analyticsContent.innerHTML = "According to the Australian Government Department of Home Affairs refugees statistics from 2016 to 2019, the top 9 refugee-importing countries are Iraq, Syria, Myanmar, Afghanistan, Democratic Republic of Congo, Ethiopia, Eritrea, Iran, Central African Republic accounting for 76% of the total refugee population.";

    language.innerHTML = "Language";
    home.innerHTML = "Home";
    compare.innerHTML = "Compare";
    analytics.innerHTML = "Who are Refugees?";


    weCare.innerHTML = "We care !!";
    hereToHelpYou.innerHTML = "We are here to Help you";
    helpContent.innerHTML = "New arrival in Australia feel overwhelmed from the culture shock and social isolation whilst settling into their new country. Fortunately, sports is the global language that helps people connect from different backgrounds. Our aim is to ensure you feel the need of a sense of belonging through local sport culture to assist you to integrate into the community.";

    findSport.innerHTML = "Find Sports";
    refugeeStats.innerHTML = "Refugee Stats";
    details.innerHTML = "Click to see more details";
    details1.innerHTML = "Click to see more details";
    isChinese = false;

})


var home = document.getElementById('home');
home.style.backgroundColor = "#CBA783";
home.style.color = "#ffffff";


var segueAnalytics = document.getElementById('segueStats');
segueAnalytics.addEventListener("click", function () {
    window.location.href = '/Home/Analytics';
});

var segueSports = document.getElementById('segueSports');
segueSports.addEventListener("click", function () {
    window.location.href = '/Home/Contact';
});


//function sendApiCall() {
//    const Http = new XMLHttpRequest();
//    const url = 'http://34.70.121.80/forecast?locality=croydon';

//    Http.open("GET", url);
//    Http.setRequestHeader("Access-Control-Allow-Headers", "*");
//    Http.send();
   

//    Http.onreadystatechange = (e) => {
//        console.log(Http.responseText)
//        console.log(e);
//    }
//}

 //   sendApiCall();



function changeToCollapsableNavBar() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}


var topLogo = document.getElementById('topLogo');
topLogo.addEventListener("click", function () {
    window.location.href = '/Home/Index';
});




