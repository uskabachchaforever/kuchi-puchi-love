const longDemo = `Hey meri janu 😚

Chahe main paas hoon ya door,
main hamesha tumhare saath hoon.
Tumhara khayal mere dil se kabhi door nahi jaata. 💗

I miss you…
par ye doori sirf kuch waqt ki hai.
Main jaldi hi aaunga, sirf tumhare paas. 🌸

Jab mann udaas ho,
jab yaad aaye,
bas yahin aa jana.
Ye jagah sirf tumhari hai. 💌

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`;

const messages = {
15:`Hey meri kuchi puchi ❤️
Aaj main paas nahi hoon,
par mera dil tumhare bilkul paas hai.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

16:`Meri sweet baby 🧸
Tumhara dil bohot precious hai,
aur main use sambhal ke rakhna chahta hoon.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

17:`Hey meri janu 😌
Main tumhara trust zor se nahi,
pyar aur patience se jeetna chahta hoon.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

18:`Hey kuchi puchi 😘
Bas meri rehna,
jitna tum comfortable ho.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

19:`Tumhara har version
mujhe apna lagta hai. 💞

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

20:`Tumhari smile
meri sabse badi weakness hai 😌

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

21:`Hey kuchi puchi 🥰
Tumhara dil
meri sabse safe jagah hai.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

22:`Meri wifu 🔥
Chahe jo ho,
main hamesha tumhare saath hoon.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

23:`Hey meri sweet baby 🫶
Mera pyar real hai,
aur sirf tumhare liye.

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

24:`Janu tension mat lo,
main jaldi aaunga,
bas thoda sa intezaar. 💗

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`,

25:`Bas thoda sa aur wait kar lo…
main aa raha hoon,
sirf tumhare paas. 💌

Smile karna mat bhulna 😚
aur padhte rahna theek hai janu.
Eat well, drink water well, and be mine 💞`
};

const today = new Date().getDate();
document.getElementById("message").innerText = messages[today] || longDemo;

setInterval(()=>{
const h=document.createElement("div");
h.className="heart";
h.innerText="❤️";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},700);
