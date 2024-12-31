"use client";
import Shorts from "@/components/Shorts";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File>();
  const [transcript, setTranscript] = useState<
    {
      startTime: string;
      endTime: string;
      content: string;
      viralPotential: number;
    }[]
  >([
    {
      startTime: "00:00",
      endTime: "00:59",
      content:
        "You said discipline a lot of times, right? And discipline makes or breaks a person. What do you think ki logo ko discipline kya karta hai? Kyun kuch log disciplined hote hain aur kuch log nahin hote hain? Kaise yeh banta hai? I'm not sure whether I'm equipped to answer that. For me, what discipline means is I have promised myself ki main yeh karunga, main karunga. Bahut log karte hain promise aur nahin kar pate. Even unko kuch karna hota hai uske baad bhi nahin kar pate. I suppose then, it is their problem they have to ask. Also, knowing what you're good at, also prioritizing ki tumhe kya chahiye, also having the right team around you, all these things help, but at the end of the day, you have to want it bad. Because if you don't, kya hoga na jis din man nahin karega na, kyuki being like being disciplined being doing the same thing,  not necessarily every day",
      viralPotential: 0.7,
    },
    {
      startTime: "01:00",
      endTime: "01:59",
      content:
        "Issi ek reason ke liye easy nahin hai, because sometime man nahin karega. Hum insaan hain. Hum act a lot on our hormones. Mood matters. Ab kitna bhi bolu hum robot nahin. Abhi atleast aaj to nahin hai. Aage pata nahin. Chip chip badal gai thi, haan aage pata nahin, but aaj to nahin hai. So, how we feel matters. Ghar pe koi mar gaya hai, matters. Kisi ka birthday hai, matters. Koi bimar ho gaya hai, matters. It matters hum insaan hain jaise kuch bhi bolo aap. It matters. Us saare matters ko ek taraf rakh kar yeh kaam to karna hai maine. Atleast yeh to chahiye mere ko, and hamare liye easier hai because our was is very goal oriented hard work. Yeh mera kaam hai. To jab bhi mere dost log jo ki football mein nahin hai, dekhte hain, compare, main kehta hu compare mat karna dost. Gym jaana tumhare liye ek task isliye hai, because tumhara kaam nahin hai. You want to do it to be healthy, ya ki should. Good, but tumhara kaam nahin hai. Mera yeh nahin hai ki mujhe healthy hona hai, bolke main gym ja raha hu.",
      viralPotential: 0.8,
    },
    {
      startTime: "02:00",
      endTime: "03:00",
      content:
        "Mera jaana hi hai. Thoda kharab feel ho raha hai, jao bhai. Aaj dukhi hu, jaana hi hai. Aaj man nahin kar raha ki kis se farak pad raha hai? Jao dost. So, because I've done it thousands of days and becomes second nature. So, on a good day it's easy. On a bad day because you have done it thousand times, your body understands. People around you understand, your core group understands. They pull you, and you need that. Kyun ki aap, I don't know about others, but I find it some days when it's very difficult, my my my team, and it's not only the football team, but the core team, my wife, my friends and all, they will they will help me. And, then once you do it enough number of times, fir second nature hai yaar. Body is amazing bhai, jo aap karoge na ek hafte, 10 din, 15 20 din ke liye, aap wahi karte rahoge. Abhi thodi din pehle I told, I told one of a very close friend of mine",
      viralPotential: 0.6,
    },
    {
      startTime: "03:01",
      endTime: "04:01",
      content:
        "chini chhod de, na, and then, first of all, as I know, kya kya hota hai? Chini pata kis kis mein hota hai? Maine kaha tujhe pata hai, you know, don't worry. Kuch bhi saman aage aageya, ek baar dekh. Knowledge ka abhav nahin hai. Aaj ke generation mein, haan, hum sabko normal general knowledge jo hai na, uska abhav nahin hai. Ek baar dekh khane ko to, tereko apna answer mil jayega. Aisi koi pechida cheez tu nahin kha raha hai, jiske ingredients tujhe pata hi na ho. Aur woh tu kha raha hai, something wrong? To, jo bhi kha raha hai, uske andar chini hai ki nahin, and we are talking about artificial sugar. Ya, and I'm not against anything baba, jisko jo khana hai, khao, because I was talking to my friend, chhod de. He left it for 19 days. And he was a task. Now, I asked him how are you feeling? Kya I'm feeling good, yeh haan koi substantial change but I'm feeling good, chini khayga? Nahin, ab man nahin karta.",
      viralPotential: 0.7,
    },
    {
      startTime: "04:02",
      endTime: "05:01",
      content:
        "Body is unbelievable. True. Jo aap ek baar habit de doge, for a longer period of time, and a longer period of time is different for different people. Uske baad yeh body is legat hai. Ya, that is, I agree to it. And, maine sugar chhodi thi six months pehle, and main aisa tha ki mujhe har meal ke baad kuch meetha chahiye. Hum, from there I just decided ki I want to eat it. Ya. And, starting main thought ki mahine mein ek baar apne aap ko cheat meal allow karunga aur ek din shakkar khaunga mahine mein. First month I did, second month I did, third month. Fourth or fifth month, ab mera shakkar khane ka man hi nahin hota. Like it's not that I'm craving. Ab woh mahine mein ek baar hai woh yaad bhi nahin hai ki last kab khaya tha aur kyun khaya tha aur khaunga bhi ki nahin khaunga. Like I don't even care. Ya. And, whoever",
      viralPotential: 0.6,
    },
    {
      startTime: "05:02",
      endTime: "06:01",
      content:
        "Main bhi jis ko jo karna hai, karo, par I think sugar leaving sugar has the single most courageous, and the most advantageous thing I've done to my body. Ya. I I don't think there's anything which has done me more good than anything but this one of the top things you've done. Like right now, like anything which is giving me more instant which makes me feel like my energy goes better, meko sona, like I I I've been tracking my sleep. Jis din main shakkar kha ke sota hu verses jis din nahin kha ke sota hu, meri dexde uthta kaise hu woh better ho jata hai. It's incredible, kaise yeh something, Hum, so when I when people, because a lot of people, when they come to me, mere aas paas ke dost, they want to know, and they want to inculcate something that I tell them. The one reason",
      viralPotential: 0.65,
    },
    {
      startTime: "06:02",
      endTime: "07:01",
      content:
        "why I tell them for the food part, I'm not going to name what I asked him, not to eat, but the food part, and sleep part is because yeh aisi do cheez hain difference aapki life mein jaise jiske liye aapko kuch nahin karna hai. If I tell you ki aapko uth ke mere saat gym aana hai, is an effort? Ya. Energy spent, uthna hai yeh hai woh time nikalna hai. Yeh do cheez hain aapko kuch nahin karna hai. Hum, imagine, isse un kya hota hai, because at the core of it it's such an easy task, at the core, haan, bohot logo ko rokna mushkil hai apne hath. Haa, haa, haa, hamare or specially India mein, koi mar gaya, khao. Koi paida ho gaya, khao. Barish ho rahi hai, khao. Mood horha hai, khao. Kuch bhi, hum aise hi hain. Because we we we we we love our, we are the best country when it comes to food. Ya. Our love language is food. And and, it's it's yummy. It's tasty, and we have decoded the way we can shuffle with food and and with taste. And, we show our love by food.",
      viralPotential: 0.6,
    },
    {
      startTime: "07:02",
      endTime: "08:01",
      content:
        "Ya. So, now, jab aapko, main unko bolta hu ki aap ne yeh nahin khana hai, itne mein sona hai, to practically aap ne kuch karna nahin hai. 9:00 baje phone side rakhna, 10:00 baje sona hai, kuch effort nahin dalna hai aap ne jo main aapko bata raha hu. Agar main bola hu gym chal. Agar main aapko bol raha hu yahaan par boiled broccoli kha, then there's action where you have to tell your body to do something. Ya. But, when I say yeh mat kha, itne mein so ja, there is no effort from your side. At the core of it. Ya. You're fighting your demons inside. But, phone rakhdiya, so gaya. Koi effort nahin hai. Sahi utha pada hua. Koi effort nahin hai. And, you know what happens is people who have done that for six months and you must have realized it. And, tell me if you if I'm wrong. The feeling that I say something I can do it, it's bloody powerful. Oh yes. It's addictive. Oh, it's powerful, then you feel, I said it, and I did it. It's bloody powerful and I'm not saying powerful in the sense ki log dekh rahe hain, kitna attractive insaan hai. No, for yourself.",
      viralPotential: 0.7,
    },
    {
      startTime: "08:02",
      endTime: "09:01",
      content:
        "And, it it can be small thing, subah 6:00 yeh wale jutte pehenke main niklunga, 10 minute walk kar ke aaunga. For six months, you feel, wow. You do it for two days, and you love it. Yes, and imagine the power after six months. Ya, you like wow. Then you feel good about yourself. And, what you feel about yourself, matters. Matters more than what people think. Aap kya sochte ho aap apne khud ke baare mein? It's one of the most important things in your life. Ya. As far as I'm concerned. True. You got to feel good about yourself. Find your way. And, this is one of the hack that I give my, the easiest way to start, Ya. Kuch nahin karna hai. Hum, kuch nahin karna hai apne.  ",
      viralPotential: 0.6,
    },
    {
      startTime: "09:02",
      endTime: "10:01",
      content:
        "Netflix dekhta hu 9:00 baje. Phone side mein rakh. Khujali ho raha hai, neend nahin aayegi. Aankh band kar. Neend nahin aayegi na, aankh band kar. Yaar aankh band kar. Still, tu 1:00 baje so. 3:00 baje so raha tha, kuch TV dekhkar. Ab, tujhe neend 1:00 baje aayegi. Current badlega problem nahin hai. Kal 12:45 hoga, fir 12:30 hoga, fir 12:00 bajenge, fir aayega, aur lagega ki main pahad se guzar raha hu pehle, ek mahina, koi nahin. That's life, sometime difficult. But, after ek mahine, You will be fine. 9:00 baje phone out 10:00 baje, 6:00 baje uth gaya. And, then you know what happened? The good habits, but strangely attracts good habits only because aap 10:00 baje soye ho. Aap 6:00 baje uth gaye ho. Aap uth te hi na 6:00 baje uth te hi, yaar poori chale gaya hai, jali bhi gai nahin bolo ge",
      viralPotential: 0.7,
    },
    {
      startTime: "10:02",
      endTime: "11:01",
      content:
        "Let me meditate, let me read a book, let me go for a walk, whatever. It can be anything. It's strange, us se pehle kya garam pani pe leta hu. Thoda nimbu daal leta hu. Yeh ho gaya. Fir, karte karte karte karte karte, thoda acha bol deta hu. Hum, thoda kam judge karta hu. Thoda meetha kam khata hu. Everything is a loop. And, the worst part is the even the bad habits, so called bad habits, also a loop. Hum. Ek kaam karte hain aaj, TV dekh te hain 2:00 baje tak. Hum. Dinner kar liya 9:00 baje, body ko calorie ki jarurat nahin hai, we all know it, we all have the knowledge. Food ki jarurat jarurat nahin hai, need nahin hai. Par, ab masti movie chal rahi hai, kuch hai nahin kya? Kuch chakna nikal liya, kuch nikal liya, jarurat nahin body ko. Ya. Because 2:00 baje tak ja ke ho",
      viralPotential: 0.65,
    },
    {
      startTime: "11:02",
      endTime: "11:59",
      content:
        "Abhi kha liya hai. Subah 3:00 baje ho, 6:00 baje uth oge nahin. 10:00 baje uth gaya. Kya yaar breakfast mein, jo bhi le aao. The moment, and this is more sports eccentric, the moment aap ke life mein yeh jawab aagya na jo bhi hai, le aao jo bhi hai kar lunga. Then, sports mein achieve karna mushkil hai. Kahin bhi achieve karna mushkil hai. I I don't have the knowledge. But, sports mein I can I can tell you. Wahan margins are very, specially what you eat. Hum, hamare mein kahavat hai, bohot kuch, what you eat is what you become. Kyun hamare mein na bhaagna, slide marna, head karna yeh easy kaam hai, sab bacche kar rahe hain. Sports mein na jab aap ground mein jaoge, sab bacche because it's enjoyable hai na. Haa. Khelna, nutmegs, step over, shooting, enjoyable hai. But, ghar mein aakar, Okay, it's a process. Now, the ice bath, I'm talking about top one. Hum, ice bath. Now, a little bit of sauna. Now, stretching. Now, foam rolling. Now, nap. Now, snacks. Now, gym stretching, now dinner, now sleep. It's a process, whole. Yeh already karna na yaar, kya yaar? Sab log to yaar bahar ja rahe hain, mere dost yaar. Sab log to woh kar rahe hain, woh kar rahe hain. Ek minute dukh lagega aapko, to farak nahin padega. You know isko actually, matlab bohot saare neuro scientist ne ispe research bhi kar rahe hain. Positive enforcement loop bolte hain. Ki jab aap, when you are in absolute shit of your life, jab aap shattered ho lazy ho, aapko kuch nahin karna, do something, which is extremely positive and hard. Hum. So, mano ki sona is a problem aur aapko lag raha hai ki bohot hard hai yaar jaldi kon sa na yaar running karna bahut zyada hard hai. So, do that harder thing, woh ek dopamine release karega. Us dopamine ki wajah se aapko aur positive hi dopamine chahiye hoga, aur positive, to ek baar woh loop start hua then your body will just force you to do positive things again and again and again, which will make you far better. My hack to my friends is, it's strange one, it's my hack by the way. Hum.",
      viralPotential: 0.8,
    },
    {
      startTime: "11:21",
      endTime: "12:19",
      content:
        "No neuro scientists, nothing. Because now when I have seen my friends go through a lot of phases of their lives. Hum. I say on a bad day, Hum, relax. You want to cry, if that's a situation, you want to have a gulab jamun, you want to watch whatever TV at night, be cozy in your quilt, do. Ya. But, then when the good day comes, make sure you are as disciplined as possible. Because I've seen, and I'm ulte. I'm ulte, when I have bad times, I go mad. Same. Ya, so but but I I think we are,  we are an anomaly. No I think, jo maine dekha hai generally kya hota hai? When people are really sad, depressed whatever whatever, they won't, aaram se khana comfort food. yeh woh, and I understand it. Before when I was young I used to judge it.  ",
      viralPotential: 0.6,
    },
    {
      startTime: "12:20",
      endTime: "13:00",
      content:
        "Wrongly, of course, kya hai yaar? Yeh kar rahe ho? Nahin kya? Agar dukh hai to gym jaao, dukh hai to bhaago, but then I realized, when I when I'm matured, nahin dost. Har insaan different hai. Har insaan ki motivation different hai, har insaan ki problems different hai. You can't, aur us problem ko kya kaise feel woh bhi different hai. And, the more problems I face in my life, I realized this. Hum aankhen khulti hain na. So, now when I talk to them, I said, ki thik hai, jab din kharab hai, le aaya kumbhal. Hum. Barish ho rahi hai, dukh ho raha hai, rona a raha hai, trap feel ho raha hai, answers nahin mil rahe hain, chai le aaya, chini wala, adrak wala, samose bhi le aaya, jalebi le aaya. Kha, aaram se, role, bhar ke, so ja. You do that? I don't. Because I said na I I'm different. Yeah. When I have bad time my all cheat meals are good ones.",
      viralPotential: 0.7,
    },
    {
      startTime: "13:01",
      endTime: "13:59",
      content:
        "Whenever I take a cheat meal, I'm liberties, it's on a good day. Sahi mara humne aaj, for example Mohun Bagan ko. Sahi mara wahan par hum log wale quarterfinal pahuch gaye. I keep like that because I I I say I'm different. You reward yourself with one, and I I realized when, to contrary to what I'm saying to people, when I start doing things that I shouldn't do, when I'm sad, I do it for a more prolonged time. It's me. If I, let's suppose, if I want to have, samosa, jalebi, vagera vagera, jo bhi hai. When I'm sad, then I'll do it for a more prolonged time. When I'm doing, when I'm happy, it's only for me. By the way, people. That's my wo, way I operate. When I'm doing on a happy day, I have a cap. Yeh karunga, my cheat meals, yeh karunga, yeh khaunga, iske saat khaunga. And, of course, I'm still cheet, I have the liberty. All these things, yeh karunga, yeh yeh, and I have it. But, on a sad time, I don't. On a sad time, I'm really guarded. Ki dost ab galti nahin karni hai. Galat nahin sochna hai, try kar, it's okay. Role. Aaj din off le le. Let's go tomorrow. But, a lot of people can't do this way. So, what I tell them is dost jab dukh lag raha hai na, tension mat le. Mast kha, ro le, dukhi ho ja, aaram se kuch utpatang mat kar, aaram se baith ja. Jab kal acha din aayega, ki woh aayega, that's life. No matter, what you have lost. And, I've seen a lot of people losing a lot of things, but things will change. At the end of the day, relax.",
      viralPotential: 0.75,
    },
    {
      startTime: "14:00",
      endTime: "15:00",
      content:
        "We live once, for a time, becomes a, and everything will be forgotten. Relax, yeh yeh football bhi aisa hai. You don't want to win every game. Life bhi aisa hai, you don't want to win every day. So, it's going to be. You know, a um, is se mujhe yaad aaya ki top three coping mechanisms for a man on a bad day. First is food and alcohol. Second is porn and social media. Ya. And, third is workaholism. So, so let's say you and me, we get in the third category, but these are the top three. There are endless people, like us jo, they get addicted to their work when they are on they are on their bad days. They are so fortunate. Because the side effects, The first two is, the side effects is ke sase kam hai. Ya. I don't know what's going to happen to me after football, though. Because once I hit that, I have no idea. I have no idea. Now, that you're a little off season, right? To, off season training discipline kya hota hai? Ab kya hota hai? Ek, parso, parso shuru kiya maine dost thi yaar. I I took liberties for 10 days. Hum. I ate whatever was there. So, my my my cheat meals are more for the company.  Mujhe nahin farak padta, I'm vegetarian. Hum, I'm vegetarian too.  Mujhe nahin farak padta, main pakki nahin hu. To, agar wife ne laga lo samose, pizza order kar diye hain.",
      viralPotential: 0.7,
    },
    {
      startTime: "15:01",
      endTime: "16:00",
      content:
        "Thik hai. Aaa, because mine is more of the day, ki is din main khaunga. It's not ki kya khaunga, that is not the protagonist. Mine is more ki is din, I'll let it go. So, 10 days I did it and then suddenly, Suresh Wangjam, apna six pack ka photo bhejta hai group mein, and I go, pff. Fir koi aur bhejta hai, ki now it's so competitive. Aise bewakoof log hain, sale off season mein bhi training kar rahe hain. You know what I mean? The competition is so high, ki ja ke chill karna hai yaar. And, then you like, so now, I need to go to the gym man. Because kya hoga na a, we get a, it's so fun, we get a pre, and he will understand it. Hum. We get a pre season pre training schedule. Okay. It's like, one day you can play any sport, one day you make sure you do stretching, one day isometric trainings, one day the ice bath. Then two days rest. It's not like normal season. Hum. But, you get ki tum apni body ko hi ranen lag jao ab. Kya pre season aane wala hai? To, pre season ke liye bhi bhi, tum taiyar hoke aana hai. Hum. Fat percentage diye huye hain ki is range mein aana hai. Yeh hua to pressure sara already hai.",
      viralPotential: 0.85,
    },
    {
      startTime: "16:01",
      endTime: "17:45",
      content:
        "And, you thought ki abhi bhi retired kiya hai from national, there was so much going in my head and he thought, I'll just let it go, and just be. And, you did that for 10 days and then suddenly, club ke jo player hain woh bari bari, main ne aaj itna sprint kiya yeh hua, maine yeh kiya. Koi six pack ka photo aur pata nahin kya. To sabko bhejna hai photo. Hum. And, you think, So, now, leave it man. We are not going out, I'm going to the gym. So, before the pre season, only pressure hai. Ek to aisi chutti kam milti hai. Hum. Once we start July 7th is our pre season start date. Haa. We end up May 31st. To, aise hi chalta rahega chalta. Thankfully ab jab bhi national duty honge, mere ko 6 din break milega. Because I'm not going to be with the national team. Ya. Aaa put your, haa, when you're putting the graphic, Aaa, but, but aaaa, the competition like that now. Everyone is a machine. And, you see worldwide sports has become so much, everyone is about those little margins. Agar aise aur bhi bohot insightful shorts aur clips dekhni hain, to is channel ko subscribe kar lo.",
      viralPotential: 0.75,
    },
  ]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please add a video to upload!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsUploading(false);
        const data = await res.json();
        const message = data.Message;
        console.log("messageee \n",message);
        setTranscript(message);
        // const jsonPart = message.match(/```json\n([\s\S]*)\n```/);
        // if (jsonPart && jsonPart[1]) {
        //   try {
        //     const array = JSON.parse(jsonPart[1]);
        //     setTranscript(array);
        //   } catch (e) {
        //     console.error("Error parsing JSON:", e);
        //     setTranscript([]); // Reset transcript on error
        //   }
        // } else {
        //   console.error("No JSON part found in the message.");
        //   setTranscript([]); // Reset transcript if no JSON part
        // }
      } else {
        setIsUploading(false);
        const data = await res.json();
        console.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI Video Clip Generator
      </h1>

      <div className="flex flex-col items-center gap-6">
        <input
          type="file"
          onChange={handleFileChange}
          accept="video/*,.mkv"
          name="video"
          className="block w-full max-w-xs px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:ring focus:ring-blue-400 ${
            isUploading && "bg-opacity-70"
          }`}
        >
          {!isUploading ? "Upload Video" : "Uploading..."}
        </button>
      </div>

      {file && (
        <div className="mt-10 flex-col md:flex-row flex items-start gap-4 h-full">
          <video
            controls
            src={URL.createObjectURL(file)}
            className="w-full max-w-xl rounded-md shadow-lg aspect-video"
          />

          <div className="bg-neutral-900 w-full h-full flex p-6 rounded-lg shadow-md">
            {isUploading ? (
              "Creating short clips, it might take 1-2 minutes..."
            ) : (
              <Shorts video={file ?? undefined} transcript={transcript} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
