const pages = [
  {
    title: "Happy Second Anniversary, My Love! (P.S. Turn landscape when using Mobile)",
    image: "JoKFJuqqbVaL.jpg",
    subtitle: "1st Anniversary!",
    description: "Tara love, let's go back down memory lane ng 2nd chapter natin.\n\nPic na tayo marami for Chapter 3 please mwehehehe para marami malagay^^"
  },
  {
    title: "Staycation w/ Yza's Friends",
    image: "IMG_6268.jpg",
    subtitle: "One of our most iconic pictures",
    description: "It took a while rin since napalitan ko 'tong wallpaper na 'to since super sweet tlga and nakakakilig tuwing nakikita ko.\nThe secret kiss says it all mwehehehe. Bagay na bagay tayo lalo na page same color clothes!! "
  },
  {
    title: "Yza's 19th Birthday!",
    image: "photo-collage.png.png",
    subtitle: "One of my favorites! (Birthday Sex)",
    description: "Naalala ko this was the first time na nagbook tayo ng sariling room. Iba talaga pag first time lol. Naalala ko pa na ayaw mo ng motel and mas want mo airbnb pero here we are now, may monthly   check in mwehehehhe\n\nKidding aside, I cherish this memory kasi we celebrated your birthday ng tayo lang, and I am forever grateful that I am the man celebrating your birthday with."
  },
  {
    title: "Yza's 19th Birthday Trip",
    image: "photo-collage.png (1).png",
    subtitle: "Ganaps Gateway",
    description: "I realized na last year na pala natin as teenagers. Anyway, super super grateful ako na we are always there for each other sa mga important ganaps. Super nag enjoy ako with u, especially pag tabi tayo matulog (sorry na makulit ako). We know rin na birthday mo ang gateway ng importang ganaps kasi after ng birthday mo sunod sunod na yung special."
  },
  {
    title: "Josh's Sponty 19th Birthday Date",
    image: "image1.png",
    subtitle: "Fell in love in November",
    description: "Alam mo ba nung day na 'to I felt like a Princess real lol. Thank u love for treating me sa birthday ko, naalala ko wala me gastos nito tas may gift pa. And super grateful ako na may sponty dates tayo and may time tayo lagi for each other ^^"
  },
  {
    title: "Venom Date",
    image: "fxn 2024-11-11 175700.266.jpg",
    subtitle: "Venom!",
    description: "Like any other date po lovee but worth it pa rin isama here hehe kasi nag effort u manood ng venom 1 and 2 tas panoorin kesa sa hello love again kasi alam mo want ko. Thank uu^^"
  },
  {
    title: "Josh's 19th Birthday",
    image: "venom.jpeg",
    subtitle: "Vodka Nights!",
    description: "Remember love inalagaan din kita here lol. Super nag eenjoy ako kasama ka when going to bars and club kasi pag wala ka ikaw lang hinahanap ko. To more birthdays we celebrate together love^^."
  },
  {
    title: "Christmas Date",
    image: "dec.png",
    subtitle: "All I want for Christmas, is you!",
    description: "Thank u love for the gifts, another date worth remembering mwehehehe."
  },  
  {
    title: "Christmas Break Szn",
    image: "dec1.png",
    subtitle: "Josh's First Kissmarks",
    description: "Naalala mo ba love bat tayo nauwi sa motel? Umuwi bigla sila Tatay lol. Ngl I really enjoyed first time we ever had an overnight and remember sa sobrang drunk mo you did unholy things sakin mwehehehe. SUPER! Thank you sa samgyup treat for our brunch love mwa."
  },  
  {
    title: "First Date of 2025",
    image: "jan.png",
    subtitle: "Finally, after a year!",
    description: "First date of 2025, sinamahan mo me magpagupit and we did the tiktok trend. Sa deca pa you nanggagaling nun hehe. I love the pic na sinisintasan kita, I love spont pics like those^^"
  },    
  {
    title: "Valentine's Date",
    image: "feb.png",
    subtitle: "Surprise!",
    description: "Lam mo ba super natuwa ako nung nasurprise kita ng real flowers mwehehehe. Hirap mo kasi isurprise pero here we are, I came up with something new. Super fun ng Valentine's natin and we did the deed sa North Edsa. To more Valentine's lovee^^."
  },    
  {
    title: "Tagaytay Princess' Debut",
    image: "MARCH).png",
    subtitle: "Most Memorable.",
    description: "Tbh this is my most memorable time spent with u. Feels like I fell in love with you all over again simula nag start yung trip. We have matching clothes, debatabley the best matching clothes we wore. Slept together, drank together, able to pull up a mobile bar together. This day was pull of ups and downs, yung sinugod si Aj sa hospital, nag byahe ng malayo, nag asikaso ng mobile bar, and nag party till the end of the night. Super thank you love kasi kahit anong lungkot, pagod, inis, saya maramdaman ko sa araw, I'm glad na I always end the day having you. You're my rest love."
  },    
  {
    title: "Pre-Anniversary Shoot",
    image: "pictorial.png",
    subtitle: "Cuties",
    description: "Super super super ganda and cute ng pics natin loveee. I want to show you off sa buong mundooo. Super ganda mo and super bagay natin mwehehehehe. I want to let you know na super enjoy din ako this day, best part was the chill kain sa Tatay Pepe's. Bawi ako sa smile ko love, sorry naka default ko kasi na pose is maangas na bf pag kasama ka instead of super OA huhu. Now I know, and alam ko na pano ka kunin^^. "
  },   
  {
    title: "Parqal Date",
    image: "parqal.png",
    subtitle: "Last Date Before Anniv",
    description: "First things first, gave me bago mo ako sagutin vibes. Remember nasa BGC din tayo nun and pics pics eme tapos gulat nlg ako pag-uwi sinagot mo na me. Super naenjoy ko 'to love and thank you sa pagsakay sa mga faves ko ket ayaw mo (matcha). Promise, we'll go back sa mga places na want mo puntahan and we're gonna make it really romantic!"
  },   
  {
    title: "Photostrips Dump",
    image: "photo.png",
    subtitle: "Monthly Mandatory",
    description: "First of all, yung photostrip natin for March is yung debut ni Ces lol di tayo nakapagphotobooth eh. More photobooth dates to come lovee, totoo nga nagiging magkamukha na tayo HAHAHAHAHAHA. Love u!^^"
  },   
  {
    title: "Video Dump",
    video: "14bd892e02ec4826ae27f5361dc6eea6.mov",
  },
  {
    title: "Happy 2nd Anniversary Love!",
    image: "IMG_0479.JPG",
    description: "Sorry agad if hindi nakacenter yung vid sa last page, di kasi namin forte web development huhu. Now you know why busy ako past few days kasi I've been coding this from scratch mwehehehe sana magustuhan mo love. Kaya ko rin pinaframe para one click away from accessing yung scrapbook and 24 reasons and para pag gising mo mapapansin mo. Also, kaya may pin kasi ikaw lang pwede makakita niyan HAHAHAHAHAHHAHA lagot pag may nakakita, pag may nagtanong ng PIN sabihin mo bawal may credit card details eh. Again, Happy Second Anniversary Love! I love you!^^"
  }
];

let currentPage = 0;

const titleEl = document.getElementById('page-title');
const imgEl = document.getElementById('page-image');
const subtitleEl = document.getElementById('page-subtitle');
const descEl = document.getElementById('page-description');
const videoEl = document.getElementById('video'); // Reference to the video element
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('prev-page');

function updatePage() {
  const page = pages[currentPage];
  titleEl.textContent = page.title;
  imgEl.src = page.image;
  subtitleEl.textContent = page.subtitle;
  descEl.textContent = page.description;

  // Show video if it exists for this page, otherwise hide it
  if (page.video) {
    videoEl.src = page.video;
    videoEl.style.display = 'block'; // Show the video element
  } else {
    videoEl.style.display = 'none'; // Hide the video element if no video exists
  }

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

nextBtn?.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

prevBtn?.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

updatePage();
