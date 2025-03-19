const landmark = [
    {
        state: "Delhi",
        image: "https://www.destguides.com/upload-files/derivations/background-image/thumbnail_webp/730/410/eyJpZCI6Iml0aW5lcmFyeXN0b3AvNjc0Ni9iYWNrZ3JvdW5kX2ltYWdlLzgxMzZkNzUwZTExZDkyZWEwZmYzZmQ4NjhhYzE2ZjU1LmpwZWciLCJzdG9yYWdlIjoic3RvcmUifQ?version=3&signature=aa349ac15e4d5ac1a39c76d190ad38d645cb28836c1f620711529e5c9e3bac7e",
        availableDistrict: 16,
        slots: 36,
        review: 3.2
    },
    {
        state: "Goa",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/India_-_Goa_-_010_-_Touristy_Baga_Beach.jpg",
        availableDistrict: 25,
        slots: 35,
        review: 4.4
    },
    {
        state: "Kerala",
        image: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=2048x2048&w=is&k=20&c=cb8raFXWtX5JvfTpbVYe9Dge9nbbCL8d8q1i-2XDoH8=",
        availableDistrict: 23,
        slots: 51,
        review: 3.0
    },
    {
        state: "Telangana",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Charminar-Pride_of_Hyderabad.jpg",
        availableDistrict: 43,
        slots: 92,
        review: 5.0
    },
    {
        state: "Tamil Nadu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRM6xkFeS24377awvKVOZhdoH7WSNQD74Fg&usqp=CAU",
        availableDistrict: 38,
        slots: 67,
        review: 4.2
    },
    {
        state: "Odisha",
        image: "https://images.unsplash.com/photo-1617217139357-b77ae58ad4b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2Rpc2hhfGVufDB8fDB8fHww",
        availableDistrict: 42,
        slots: 86,
        review: 3.7
    },
    {
        state: "Sikkim",
        image: "https://northbengaltourism.com/images/sikkim/tsomgo_changu_lake_1024.jpg",
        availableDistrict: 40,
        slots: 22,
        review: 4.9
    },
    {
        state: "Rajasthan",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2b/f0/f7/img-20181018-104236-01.jpg?w=1000&h=-1&s=1",
        availableDistrict: 42,
        slots: 52,
        review: 3.6
    },
    {
        state: "Uttar Pradesh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Roomi_darwaza.jpg/1920px-Roomi_darwaza.jpg",
        availableDistrict: 28,
        slots: 31,
        review: 4.6
    },
    {
        state: "Gujarat",
        image: "https://media.istockphoto.com/id/177800537/photo/bay-and-harbor-view-of-dwarka-gujarat-india.jpg?s=612x612&w=0&k=20&c=oz6rHIHlNqZZ8N_PpGP8gZoBRcp4oFF4g5qVNjwGRSo=",
        availableDistrict: 49,
        slots: 24,
        review: 4.6
    },
    {
        state: "Uttarakhand",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Valley_of_flowers_uttaranchal_full_view.JPG",
        availableDistrict: 36,
        slots: 41,
        review: 4.9
    },
    {
        state: "Mizoram",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d4/d5/99/from-the-top-of-reiek.jpg?w=700&h=-1&s=1",
        availableDistrict: 25,
        slots: 92,
        review: 3.9
    },
    {
        state: "Nagaland",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Kohima_24_July_2021.jpeg",
        availableDistrict: 11,
        slots: 27,
        review: 3.9
    },
    {
        state: "Jammu & Kashmir",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Mubarak_Mandi_Complex.jpg",
        availableDistrict: 19,
        slots: 60,
        review: 3.8
    },
    {
        state: "Bihar",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Gandhi_Maidan.jpg",
        availableDistrict: 32,
        slots: 81,
        review: 3.6
    },
    {
        state: "Andhra Pradesh",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Tirumala_gopurams.JPG",
        availableDistrict: 36,
        slots: 52,
        review: 4.0
    },
    {
        state: "Haryana",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/09/7e/57/raja-nahar-singh-palace.jpg",
        availableDistrict: 39,
        slots: 100,
        review: 4.0
    },
    {
        state: "Madhya Pradesh",
        image: "https://2.bp.blogspot.com/-fVBHMT9lOy8/W0yBpG9XZvI/AAAAAAAAH-k/NQq8FcydsTwNmL5a-qovdFYROEGDxxEbgCLcBGAs/s1600/The-Great-Sanchi-Stupa-MP%2B%25281%2529.jpg",
        availableDistrict: 45,
        slots: 64,
        review: 4.5
    },
    {
        state: "Arunachal Pradesh",
        image: "https://tse2.mm.bing.net/th?id=OIP.qwxO2RLpNbOqm331AkuvvQHaE8&pid=Api&P=0&w=258&h=173",
        availableDistrict: 10,
        slots: 99,
        review: 3.6
    },
    {
        state: "Ladakh",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pangong_Tso_2.jpg",
        availableDistrict: 11,
        slots: 41,
        review: 4.3
    },
    {
        state: "Jharkhand",
        image: "https://www.hlimg.com/images/things2do/738X538/ttd_201811251308071543131487752747t.jpg",
        availableDistrict: 15,
        slots: 25,
        review: 3.5
    },
    {
        state: "Maharashtra",
        image: "https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=612x612&w=0&k=20&c=L1LJVrYMS8kj2rJKlQMcUR88vYoAZeWbYIGkcTo6QV0=",
        availableDistrict: 44,
        slots: 21,
        review: 3.5
    },
    {
        state: "New Delhi",
        image: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
        availableDistrict: 13,
        slots: 71,
        review: 4.4
    }
];
export default landmark