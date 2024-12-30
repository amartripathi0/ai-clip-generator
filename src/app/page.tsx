"use client";
import Shorts from "@/components/Shorts";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File>();
  const [transcript, setTranscript] = useState([]);
  // const [transcript, setTranscript] = useState([
  //   {
  //     start: "00:00",
  //     end: "01:00",
  //     content:
  //       "You said discipline a lot of times, right? And discipline makes or breaks a person. What do you think ki logon ko discipline kya karta hai? Kyon kuch log disciplined hote hain aur kuch log nahin hote? Kaise yeh banta hai?",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "01:00",
  //     end: "02:00",
  //     content:
  //       "I'm not sure whether I am equipped to answer that. For me, what discipline means is I have promised myself ki main yeh karunga, main karunga. Bahut log karte hain promise aur nahin kar pate. Even unko kuch karna hota hai uske baad bhi nahin kar pate.",
  //     viralPotential: "0.4",
  //   },
  //   {
  //     start: "02:00",
  //     end: "03:00",
  //     content:
  //       "I just say, then, it is their problem. They have to ask. Also knowing what you are good at, also prioritizing ki tume kya chahiye. Also having the right team around you, all these things help, but at the end of the day, you have to want it bad. Because if you don't, kya hoga na, jise din man nahin karega na,  because",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "03:00",
  //     end: "04:00",
  //     content:
  //       "Being, like being disciplined being doing the same thing, not every day. Isi ek reason ke liye easy nahin hai because sometimes man nahin karega. Hum insaan hain. Hmm. We act a lot on our hormones, mood matters. Ab kitna bhi bolu hum robot nahin, abhi atleast aaj toh nahin hai. Na. Aage pata nahin.  Chip badal gai toh aage pata nahin, but aaj toh nahin hai. So, how we feel, matters. Ghar pe koi mar gaya hai, matters. Kisi ka birthday hai, matters. Koi bemar ho gaya hai, matters.",
  //     viralPotential: "0.5",
  //   },
  //   {
  //     start: "04:00",
  //     end: "05:00",
  //     content:
  //       "It matters hum insaan hain chahe kuch bhi bol lo aap. It matters. Us, saare matters ko ek taraf rakh kar yeh kaam toh karna hai mujhe. Atleast yeh toh chahiye mere ko aur hamare liye easier hai because we are very goal oriented hard work. Hmm. Yeh mera kaam hai. Toh, jab bhi mere dost log jo ki football mein nahin hai, dekh de compare, main kehta hu ki compare mat karna dost.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "05:00",
  //     end: "06:00",
  //     content:
  //       "Gym jaana tumare liye ek task is liye hai because tumhara kaam nahin hai, you want to do it to be healthy, you should, good. But, tumhara kaam nahin hai. Mera yeh nahin hai ki mujhe healthy hona, balki main gym ja raha hu. Mera jaana hi hai. Thoda kharab feel ho raha hai, jaao bhai. Aaj dukhi hu, jaana hi hai. Aaj man nahin kar raha, ki, kisi se fark pad raha hai, jaao dost. So because I've done it thousands of days and it becomes second nature.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "06:00",
  //     end: "07:00",
  //     content:
  //       "So, on a good day, it's easy. On a bad day, because you have done it thousands of times, your body understands. People around you understand, your core group understands, they pull you. And you need that. Because aap, I don't know about others but I find it some days when it is very difficult, my my my team and it's not only the football team, but the core team, my wife, my friends and you know all, they will they will help me. And then once you do it enough number of times,  fir second nature hai yaar. Body is amazing bhai. Jo aap karoge na ek hafta, 10 din, 15 20 din ke liye, aap wahi karte rahoge.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "07:00",
  //     end: "08:00",
  //     content:
  //       "Abhi thodi din pehle, I told I told one of a very close friends of mine. Hmm. Chinese chod de. Ha. And then first of all as a,  you know, kya kya hota hai, cheeni pata hai, kis kis mein cheeni hota hai? Main kaha tujhe pata hai? You know don't worry. Kuch bhi saman aage aa gaya, ek baar dekh. Knowledge ka abhav nahin hai. Aaj ke generation mein, ha. Hum sab ko, normal, general knowledge jo hai na uske abhav nahin hai. Ek baar dekh khane ko toh, tereko apna answer mil jaayega. Aisi koi pechida cheez tu nahin kha raha hai, jiske ingredients tujhe pata hi na ho.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "08:00",
  //     end: "09:00",
  //     content:
  //       "Aur woh toh kha raha hai, something wrong.  Toh, jo bhi kha raha hai uske andar cheeni hai ki nahin. And we are talking about artificial sugar. Ya.  And I am not against anything baba. Jisko jo khana hai, khaao. Because I was talking to my friend, chod de. He left it for 19 days. Hmm. And he was a task. Now I asked him how you feeling?  Ki I am feeling good yeh koi substantial change but I am feeling good. Cheeni khaayega? Nahin ab man nahin karta. Body is unbelievable. True. Jo aap ek baar habit de doge for a longer period of time and longer period of time.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "09:00",
  //     end: "10:00",
  //     content:
  //       "Is different for different people. Uske baad yeh body is de deta hai. Ya, that is, hmm, I agree to it. And main ne sugar chodi thi, six month pehle. And main aisa tha ki mujhe har meal ke baad kuch meetha chahiye. Hmm. From there, I just decided ki I want to eat it. Ya. And, starting mein I thought ki mahine mein ek baar apne aap ko cheat meal allow karunga aur ek din shakkar khaunga mahine mein. First month, I did, second month I did, third month.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "10:00",
  //     end: "11:00",
  //     content:
  //       "Fourth aur fifth month ab mera shakkar khane ka man hi nahin hota. Ya. Like it's not that I am craving, ab woh mahine mein ek baar hai woh yaad bhi nahin hai ki last kab khaya tha aur kyun khaya tha aur khaunga bhi ki nahin khaunga? Like, I don't even care. Ya. And, whoever, main main bhi jisko jo karna hai, karo, par, I think sugar leaving sugar has the single most courageous and the most advantageous thing I've done to my body. Ya. I don't think there's anything which has done me more good than anything, but this one of the top things you do.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "11:00",
  //     end: "12:00",
  //     content:
  //       "Like right now, like anything which has given me more instant, which makes me feel like my energy goes better. Mere ko sona, like I I've been tracking my sleep. Jise din main shakkar kha ke sota hu, versus jise din nahin kha ke sota hu, meri sleep se uthta kaise hu, woh better ho jata hai. It's incredible. Kaise, something? Hmm. So, when I when people because a lot of people when they come to me mere aas paas ke dost, they want to know and they want to inculcate something that I tell them.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "12:00",
  //     end: "13:00",
  //     content:
  //       "The one reason why I tell them, for the food part. I am not going to name what I ask him not to eat. But the food part and sleep part is because yeh aisi do cheezein hain, difference aapki life mein jaan, jiske liye aapko kuch nahin karna hai. If I tell you ki aapko uth ke mere saath gym aana hai, it's an effort. Ya. Energy spend. Uthna hai, yeh hai woh time nikalna hai, yeh do cheezein hain, aapko kuch nahin karna hai. Hmm.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "13:00",
  //     end: "14:00",
  //     content:
  //       "Imagine, isse un kya hota hai? Because, at the core of it, it's such an easy task. At the core, haan,  bahut logon ko rokna mushkil hai apne haath. Hmm. Ha, ha, hum,  especially India mein, koi mara, khaao. Koi paida ho gaya, khaao. Barish ho rahi hai, khaao. Mood hora hai, khaao, kuch bhi. Hum aise hi hain. Because we we we we we, love our, we are the best country when it comes to food. Ya.  Our love language is food. And and it's it's yummy, it's tasty. Ya. And we have decoded the way we can shuffle with food and and with taste. And we show our love by food.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "14:00",
  //     end: "15:00",
  //     content:
  //       "Ya. So now, jo aapko, main unko bolta hu ki aapne yeh nahin khana, itne mein sona hai, toh practically, aapne kuch karna nahin hai. 9 baje phone side rakhna hai, 10 baje sona hai. Kuch effort nahin daalna hai aapne jo main aapko bata raha hu. Agar main bolun ki gym chal, agar main aapko bol raha hu ki, yaha par boiled broccoli kha, then there is action where you have to tell your body to do something. Ya.  But, when I see, yeh mat kha itne mein so ja, there is no effort from your side. At the core of it. Ya. You are fighting your demons inside. But, phone rakh diya so gaya, koi effort nahin hai. Se be utha, pda hua hai. Koi effort nahin hai.  And you know what happens is people who have done that for six months and you must have realised it and tell me if you if I'm wrong.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "15:00",
  //     end: "16:00",
  //     content:
  //       "The feeling that I say something I can do it, it's bloody powerful. Oh, it's powerful. Then you feel, I said it, and I did it. It's bloody powerful. I am not saying powerful in the sense ki log dekh rahe hain ki kitna attractive insaan hai. No, for yourself. And it can be a small thing. Subah 6 baje yeh wale jute pehan ke, main niklunga 10 minutes walk kar ke aaunga. You do it for six months, you feel wow. You do it for two days and you love it. Yes. Imagine the power after six months? Ya, you like wow. Then you feel good about yourself. And what you feel about yourself matters, matters more than what people think. Aap kya sochte ho ap apne khud ke bare mein.  It's one of the most important things in your life. Ya. As far as I am concerned.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "16:00",
  //     end: "17:00",
  //     content:
  //       "True. You got to feel good about yourself, find your way. And this is one of the hack that I give, my, the easiest way to start. Ya.  Kuch nahin karna hai. Hmm, kuch nahin karna hai aapne. The easiest way to start, ya.  Kuch nahin karna hai aapne. Hmm,  kuch nahin karna hai aapne. Hmm,  netflix dekhta hu 9 baje ke phone side mein rakh.  Khushli ho raha hai, neend nahin aayegi, aak band kar.  Neend nahin aayegi na, aak band kar. Yaar aak band kar. Still, tu 1 baje so. 3 baje tak so raha tha, kuch tv dekh kar, ab tujhe neend 1 baje aayegi. Kar badlega, problem nahin hai. Kal 12:45 hoga, fir 12:30 hoga, fir 12 bajeinge, fir aayega aur lagega ki main pahad se guzar raha hu pehle ek mahina. Koi nahin, that's life, sometimes difficult. Hmm. But, after ek mahine.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "17:00",
  //     end: "17:59",
  //     content:
  //       "You'll be fine.  9 baje phone out 10 baje, 6 baje uth gaya, and then you know what happened? The good habits bada strangely attracts good habits only. Because aap 10 baje soye ho, aap 6 baje uth gaye ho aap uth te hi na 6 baje uth te hi yaar puri chale gaya hai,  jaldi bhi gaana bolo ge? Let me meditate, let me read a book, let me go for a walk, whatever, it can be anything. It's strange.  Us se pehle yaar garam pani pi leta hu. Thoda nimbu daal leta hu. Yeh ho gaya. Fir karte karte karte karte, karte karte thoda acha bol deta hu. Hmm. Thoda kam judge karta hu. Thoda meetha kam khata hu. Everything is a loop. And, the worst part is the even the bad habits, so called bad habits also are a loop. Hmm.  Ek kaam karte hain aaj, tv dekh te hain 2 baje tak. Hmm. Dinner kar liya 9 baje, body ko calorie ki jarurat nahin hai. We all know it. We all have the knowledge, food ki jarurat jarurat nahin hai, need nahin hai. But, ab, mat achhi movie chal rahi hai kuch",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "18:00",
  //     end: "18:59",
  //     content:
  //       "Hai nahin kya? Kuch chakna nikal liya, kuch nikal liya. Jarurat nahin body ko. Ya.  Because 2 baje tak ja ke ho, abhi kha liya hai,  subah 3 baje ho, 6 baje uth hoge nahin? 10 baje uth gaya, kya yaar breakfast mein,  jo bhi le aao. The moment and this is more sports centric. The moment aapke life mein yeh jawab aa gaya na, jo bhi hai le aao jo bhi hai, kar lunga. Then sports mein achieve karna mushkil hai. Kahin bhi achieve karna mushkil hai. I I don't have the knowledge, but sports mein I can I can tell you,  waha margins are very especially what you eat. Hmm, hamare mein kahavat hai bahut kuch, what",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "19:00",
  //     end: "19:59",
  //     content:
  //       "You eat is what you become. Ki, hamare mein na bhaagna, slide karna,  head karna yeh easy kaam hai sab bache kar rahe hain. Sports mein na jab aap ground mein jaaoge, sab bache because enjoyable hai na? Ha.  Khelna, nutmegs, step over, shooting, enjoyable hai. Par ghar mein aakar okay, it's a process. Now, the ice bath. I am talking about top one, hmm, ice bath. Now, a little bit of sauna. Now stretching, now foam rolling, now nap, now snacks, now gym stretching, now dinner, now sleep. It's a process, whole.  Yeh aap already karna na, yaar, hmm.  Kya hai yaar. Sab log toh, yaar, bahar ja rahe hain mere dost yaar. Sab log toh woh kar rahe hain, woh kar rahe hain. Ek minute, dukh lagega aapko. Toh, fark nahin padega. You know isko actually matlab bahut saare neuroscientist ne is pe research bhi kar rahe hain.  Positive enforcement loop bolte hain ki jab aap, when you are in absolute shit of your life, jab aap shattered ho, lazy ho, aapko kuch nahin karna.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "20:00",
  //     end: "20:59",
  //     content:
  //       "Do something which is extremely positive and hard. Hmm.  So man lo ki sona is the problem, aur aapko lag raha hai ki bahut hard hai yaar, jaldi khana yaar, running karna bahut jyada hard hai. So, do that harder thing. Woh ek dopamine release karega. Us dopamine ki wajah se aapko aur positive hi dopamine chahiye hoga. Aur, hmm, hmm.  To ek baar woh loop start hua, then your body will just force you to do positive things again and again and again, which will make you far better. My my hack to my friends is, it's a strange one, it's my hack by the way. Hmm. No neuroscientist, nothing. Because now, when I have seen my friends go through a lot of phases of their lives. Hmm. I say on a bad day Hmm, relax.",
  //     viralPotential: "0.2",
  //   },
  //   {
  //     start: "21:00",
  //     end: "21:59",
  //     content:
  //       "You want to cry, if that's the situation. You want to have gulab jamun, you want to watch whatever tv at night, be cozy in your quilt, do. Ya, but then, when the good day comes.  Make sure you are as disciplined as possible. Because I have seen and I am ulat. I am ulat, when I have bad times, I go mad. Same, ya, so but but I I think we are. We are an anomaly.  Now, I think,  jo main ne dekha hai generally kya hota hai, when people are really sad depressed, whatever, whatever they, want. Aaram se khana, comfort food yeh woh.  And I understand it. Before, when I was young I used to judge it wrongly. Of course,  saale like, kya hai yaar yeh kar rahe ho. Nahin kya?  Agar dukh hai toh gym jaao. Dukh hai toh bhaago, but then, I realized, when when I matured, nahin dost, har insaan different hai.  Har insaan ki motivation different hai. Har insaan ki problems different hai. You can't",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "22:00",
  //     end: "22:59",
  //     content:
  //       "Aur us problem ko kya kaise feel woh bhi different hai. And the more problems I face in my life, I realise this. Ankh khulti hai na, so now when I talk to them I said, ki thik hai jab din kharab hai, le aa kambl. Hmm.  Barish ho rahi hai, dukh ho raha hai, rona aa raha hai, trap feel ho raha hai, answers nahin mil rahe, chai le aa, cheeni wala, adrak wala, samose bhi le aa, jalebi le aa, kha, aaram se, role, bhar ke, so ja. You do that? I don't, because I said na I am I am different. Different. Ya. When I have a bad time, my,  all cheat meals are good ones. Whenever I take a cheat meal, liberty it's on a good day. Sahi mara hum ne aaj, for example, Mohun Bagan ko. Sahi mara waha par hum log wale quarter-final pahucha gaye. I keep like that because I am I am I am different.  You reward yourself with, one, and I have realized when, to the contrary to what I am saying to people. When I start doing things that I shouldn't do. When I'm sad, I do it for a more prolonged time.",
  //     viralPotential: "0.3",
  //   },
  //   {
  //     start: "23:00",
  //     end: "23:59",
  //     content:
  //       "It's me. If I, let's suppose, if I want to have, samose, jalebi, wagera wagera, jo bhi hai. When I am sad. Then I'll do it for a more prolonged time.  When I am doing,  when I am happy, it's only for me, by the way people, that's my way I operate. When I'm doing on a happy day. I have a cap. Yeh karunga, my cheat meals ap yeh karunga, yeh khaunga, iske saath khaunga. And, of course, I am still,  I have the liberty, all these things. Ki yeh karunga, yeh, and I have it.  But, on a sad time, I don't. On a sad time, I am really guarded ki dost ab galti nahin karni hai, galat nahin sochna hai, try kar.  It's okay, role. Aak din, off le le.  Let's go tomorrow, but a lot of people can't do this way. So what I tell them is, dost,  jab dukh lag raha hai na, tension mat le. Mast kha, ro le, dukhi ho ja, aaram se, kuch utpatang mat kar.  Aaram se, beht ja. Jab kal acha din aayega, ki woh aayega,  that's life. No matter what you have lost, and I've seen a lot of people losing a lot of things, but things will change.  At the end of the day, relax, we live once.  Thode time  be, hum sab,  and everything will be forgotten. It relaxes, yeh yeh football bhi aisa hai you know you don't want to win every game.  Life bhi aise hai you don't want to win every day. So it's going to be, you know, uh, isse mujhe yaad aaya ki top three coping mechanisms for a man on a bad day. First is food and alcohol, second is porn and social media. Ya. And third is workaholism.",
  //     viralPotential: "0.4",
  //   },
  //   {
  //     start: "24:00",
  //     end: "24:59",
  //     content:
  //       "So, so let's say, you and me,  we get in the third category. But these are the top three. There are endless people like us, jo, they get addicted to their work when they're when they are on their bad days. They're so fortunate. Because the side affects, this side, less.  Ya. I don't know what's going to happen to me after football though. Because once I hit that I have no idea. I have no idea. Now, that you are little off season. Right? Toh, off season training discipline kya hota hai? Ab kya hota hai? I took liberties for 10 days. Hmm.  I ate whatever was there. So my my my cheat meals are more for the company. Mujhe nahin fark padta, I am vegetarian. Hmm, I am vegetarian too. Mujhe nahin fark padta, main paki nahin hu.  To agar wife ne laga lo samose se pizza order kar diya hai.  Thik hai.  Because mine is more of the day, ki is din main khaunga.  It's not ki kya khaunga, that is not the, the protagonies. Mine is more ki is din I'll let it go. So 10 din I did it, and then suddenly",
  //     viralPotential: "0.3",
  //   },
  // ]);
  const [isUploading, setIsUploading] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please add a video to upload!")
      return
    };

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsUploading(false)
        const data = await res.json();
        const message = data.Message;
        console.log(message);

        const jsonPart = message.match(/```json\n([\s\S]*)\n```/);
        if (jsonPart && jsonPart[1]) {
          try {
            const array = JSON.parse(jsonPart[1]);
            setTranscript(array);
          } catch (e) {
            console.error("Error parsing JSON:", e);
            setTranscript([]); // Reset transcript on error
          }
        } else {
          console.error("No JSON part found in the message.");
          setTranscript([]); // Reset transcript if no JSON part
        }
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
    console.log(transcript);
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
          className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:ring focus:ring-blue-400 ${isUploading && "bg-opacity-70"}`}
        >
          { !isUploading ? "Upload Video" : "Uploading..."}
        </button>
      </div>

      {file && (
        <div className="mt-10 flex items-start gap-4 h-full">
          <video
            controls
            src={URL.createObjectURL(file)}
            className="w-full max-w-xl rounded-md shadow-lg aspect-video"
          />

          <div className="bg-neutral-900 w-full h-full flex p-6 rounded-lg shadow-md">
          {
            isUploading ? "Creating short clips, it might take 1-2 minutes...":
          <Shorts video={file ?? undefined} transcript={transcript} />
          }
        </div>
        </div>
      )}

    </div>
  );
};

export default Home;
