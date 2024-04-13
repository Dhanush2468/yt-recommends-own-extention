// Define channel object
const channel = {
    name: 'JavaScript Mastery',
    url: '/c/javascriptmastery',
    logo: 'https://lh3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0x00ffffff-no-rj'
};

const videos = [
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=ZBCUegTZF7M&t=50s",
        "title": "React Native Course for Beginners in 2024 | Build a Full Stack React Native App"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=kRQbRAJ4-Fs",
        "title": "Beginner Three.js & GSAP Tutorial | Build and Deploy an Apple Website using React"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=Ahwoks_dawU&t=4386s",
        "title": "Build and Deploy a Full Stack AI SaaS Platform with Next js 14, TypeScript, Stripe"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=6a3Dz8gwjdg",
        "title": "Build and Deploy a React Admin Dashboard With Real time Data, Charts, Events, Kanban, CRM, and More"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=zgGhzuBZOQg",
        "title": "Build and Deploy a Full Stack Next 14 MERN Events App with Stripe, Typescript, Tailwind"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=FKZAXFjxlJI",
        "title": "Build Modern Next 14 Server Side App with Server Actions, Infinite Scroll & Framer Motion Animations"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=_W3R2VwRyF4",
        "title": "Build and Deploy a Full Stack Social Media App | React JS, Appwrite, Tailwind CSS, React Query"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=lh9XVGv6BHs&t=13565s",
        "title": "Web Scraping Full Course 2024 | Build and Deploy eCommerce Price Tracker"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=r8nXMA_pf0w",
        "title": "Next.js isn't React"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=tS7upsfuxmo",
        "title": "Tailwind CSS Full Course 2023 | Build and Deploy a Nike Website"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=AHtSIP-pRL4",
        "title": "Transforming a Design into a Fully Responsive App in an Hour"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=986hztrfaSQ&t=85s",
        "title": "Build and Deploy a Full Stack Next.js 14 Application | React, Next JS 14, TypeScript, Tailwind CSS"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=i5TAC9OkK-A",
        "title": "The Story of JavaScript Mastery"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=wm5gMKuwSYk&t=5s",
        "title": "Next.js 14 Full Course 2024 | Build and Deploy a Full Stack App Using the Official React Framework"
    },
    {
        "thumb": "https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoCkL-9dE5QxVhiZn4aCJs6jjGQ",
        "url": "https://www.youtube.com/watch?v=ezv5Zkm67D0",
        "title": "A Developer's Manual to ChatGPT"
    }
]



const titles = document.getElementById('contents');

function Title() {
    const title = document.createElement('h1');
    title.classList.add('title');

    title.innerHTML = `
    <img class="title-roc"
    src="https://raw.githubusercontent.com/Dhanush2468/yt-recommends-own-extention/main/title.png"
    alt="thumb"
/>
    `;
    titles.prepend(title);
}
Title()
// Get reference to contents container
const contents = document.getElementById('contents');




// Function to create a card
function createCard(video) {
    const youtubeCard = document.createElement('div');
    youtubeCard.classList.add('youtube-card');

    youtubeCard.innerHTML = `
        <a class="thumb-container" href="${video.url}">
            <img
                src="${video.thumb}"
                alt="thumb"
            />
        </a>
        <div class="card-info">
            <a class="card-info-left" href="${channel.url}">
                <img
                    src="${channel.logo}"
                    alt="user"
                />
            </a>
            <div class="card-info-right">
                <a class="title" href="${video.url}">
                    ${video.title}
                </a>
                <a class="user" href="${channel.url}">
                    ${channel.name}
                </a>
            </div>
        </div>
    `;

    contents.prepend(youtubeCard);
}

// Function to get a random video from the videos array
function getRandomVideo() {
    return videos[Math.floor(Math.random() * videos.length)];
}

// Create two random cards
createCard(getRandomVideo());
createCard(getRandomVideo());








