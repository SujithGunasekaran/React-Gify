import { FC, useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import GifList from './GifList';

const HomeSearch: FC = () => {

    const [gifs, setGifs] = useState([
        {
            "type": "gif",
            "id": "S2IfEQqgWc0AH4r6Al",
            "url": "https://giphy.com/gifs/minions-despicableme-despicableme4-despicablememovie-S2IfEQqgWc0AH4r6Al",
            "slug": "minions-despicableme-despicableme4-despicablememovie-S2IfEQqgWc0AH4r6Al",
            "bitly_gif_url": "https://gph.is/g/E1L3YG1",
            "bitly_url": "https://gph.is/g/E1L3YG1",
            "embed_url": "https://giphy.com/embed/S2IfEQqgWc0AH4r6Al",
            "username": "minions",
            "source": "https://www.youtube.com/watch?v=qQlr9-rF32A",
            "title": "Despicable Me Hello GIF by Minions",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.youtube.com",
            "source_post_url": "https://www.youtube.com/watch?v=qQlr9-rF32A",
            "is_sticker": 0,
            "import_datetime": "2024-01-28 21:49:58",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "270",
                    "width": "480",
                    "size": "1328927",
                    "url": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "100133",
                    "mp4": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "569606",
                    "webp": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "22",
                    "hash": "5a077e08543932b2fb07e90ed7582310"
                },
                "fixed_width": {
                    "height": "112",
                    "width": "200",
                    "size": "228106",
                    "url": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "37685",
                    "mp4": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "115382",
                    "webp": "https://media0.giphy.com/media/S2IfEQqgWc0AH4r6Al/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/minions/YTYKGeLWH0og.jpg",
                "banner_image": "https://media4.giphy.com/channel_assets/minions/NFY68P8JactN.jpg",
                "banner_url": "https://media4.giphy.com/channel_assets/minions/NFY68P8JactN.jpg",
                "profile_url": "https://giphy.com/minions/",
                "username": "minions",
                "display_name": "Minions",
                "description": "DM4 how? Own it on Digital and Blu-ray Now.",
                "instagram_url": "https://instagram.com/Minions",
                "website_url": "http://www.despicable.me",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPVMySWZFUXFnV2MwQUg0cjZBbCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPVMySWZFUXFnV2MwQUg0cjZBbCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPVMySWZFUXFnV2MwQUg0cjZBbCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPVMySWZFUXFnV2MwQUg0cjZBbCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Movie gif. Gru from Despicable Me wears a bubblegum pink shirt and dramatically squats and waves his arms in the air in front of a blue car. He says with wide eyes, \"Hellooo!,\" which appears as text. Margot looks at him with an alarmed expression. "
        },
        {
            "type": "gif",
            "id": "GRPy8MKag9U1U88hzY",
            "url": "https://giphy.com/gifs/sesamestreet-sesame-street-cookie-monster-GRPy8MKag9U1U88hzY",
            "slug": "sesamestreet-sesame-street-cookie-monster-GRPy8MKag9U1U88hzY",
            "bitly_gif_url": "https://gph.is/g/ZOLAwgg",
            "bitly_url": "https://gph.is/g/ZOLAwgg",
            "embed_url": "https://giphy.com/embed/GRPy8MKag9U1U88hzY",
            "username": "sesamestreet",
            "source": "",
            "title": "Cookie Monster Hello GIF by Sesame Street",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2024-03-13 16:07:59",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "1056774",
                    "url": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "373992",
                    "mp4": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "402408",
                    "webp": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "33",
                    "hash": "a3f3e7a1e3c82bbe22c5b2088b11c79b"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "205256",
                    "url": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "96166",
                    "mp4": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "91718",
                    "webp": "https://media0.giphy.com/media/GRPy8MKag9U1U88hzY/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH.png",
                "banner_image": "https://media4.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                "banner_url": "https://media4.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",
                "profile_url": "https://giphy.com/sesamestreet/",
                "username": "sesamestreet",
                "display_name": "Sesame Street",
                "description": "Our nonprofit’s mission is to help kids grow smarter, stronger, kinder – in more than 150 countries around the world!",
                "instagram_url": "https://instagram.com/SesameStreet",
                "website_url": "http://sesameworkshop.org",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPUdSUHk4TUthZzlVMVU4OGh6WSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPUdSUHk4TUthZzlVMVU4OGh6WSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPUdSUHk4TUthZzlVMVU4OGh6WSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPUdSUHk4TUthZzlVMVU4OGh6WSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Sesame Street gif. Cookie Monster jumps and waves, saying, \"Hi, ya!\""
        },
        {
            "type": "gif",
            "id": "28GHfhGFWpFgsQB4wR",
            "url": "https://giphy.com/gifs/foxhomeent-hello-friday-mrs-doubtfire-28GHfhGFWpFgsQB4wR",
            "slug": "foxhomeent-hello-friday-mrs-doubtfire-28GHfhGFWpFgsQB4wR",
            "bitly_gif_url": "https://gph.is/2zoREKd",
            "bitly_url": "https://gph.is/2zoREKd",
            "embed_url": "https://giphy.com/embed/28GHfhGFWpFgsQB4wR",
            "username": "foxhomeent",
            "source": "",
            "title": "Robin Williams Hello GIF by 20th Century Fox Home Entertainment",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2018-11-02 15:19:09",
            "trending_datetime": "2020-08-11 18:07:53",
            "images": {
                "original": {
                    "height": "450",
                    "width": "450",
                    "size": "1951233",
                    "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "255508",
                    "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "686628",
                    "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "48",
                    "hash": "e43be084d9b980117145c482bc119f77"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "496395",
                    "url": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "60076",
                    "mp4": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "182466",
                    "webp": "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/channel_assets/foxhomeent/tCKZC54c2Sgc.jpg",
                "banner_image": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
                "banner_url": "https://media4.giphy.com/channel_assets/foxhomeent/dCOcfstywrkP.jpg",
                "profile_url": "https://giphy.com/foxhomeent/",
                "username": "foxhomeent",
                "display_name": "20th Century Fox Home Entertainment",
                "description": "Welcome to the official Fox Home Entertainment Giphy channel! Browse our gifs for even more of your favorite Fox stars, movies and TV shows.\r\n\r\nShop, watch, explore and get even more from your favorite movies and TV shows at http://FoxMovies.com/, the official site for 20th Century Fox Home Entertainment.\r\n\r\nDownload the Movie of the Day iOS, and now also Apple TV app for up to 70% discount on movies everyday: \r\nhttp://bit.ly/FHEMovieoftheDay",
                "instagram_url": "https://instagram.com/foxhomeent",
                "website_url": "",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTI4R0hmaEdGV3BGZ3NRQjR3UiZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Movie gif. Robin Williams as Mrs. Doubtfire pops up from behind a refrigerator door with whipped cream covering her face as she smiles and says, \"Hello!\""
        },
        {
            "type": "gif",
            "id": "5FDfOtafB4Gnwr9dBm",
            "url": "https://giphy.com/gifs/thedrewbarrymoreshow-hello-hi-drew-barrymore-5FDfOtafB4Gnwr9dBm",
            "slug": "thedrewbarrymoreshow-hello-hi-drew-barrymore-5FDfOtafB4Gnwr9dBm",
            "bitly_gif_url": "https://gph.is/g/4bxdgNn",
            "bitly_url": "https://gph.is/g/4bxdgNn",
            "embed_url": "https://giphy.com/embed/5FDfOtafB4Gnwr9dBm",
            "username": "thedrewbarrymoreshow",
            "source": "youtube.com/thedrewbarrymoreshow",
            "title": "Pick Up Hello GIF by The Drew Barrymore Show",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "youtube.com/thedrewbarrymoreshow",
            "is_sticker": 0,
            "import_datetime": "2020-11-12 19:47:56",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "430",
                    "size": "1841432",
                    "url": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "409797",
                    "mp4": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "726204",
                    "webp": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "16",
                    "hash": "183c414de337c7de6946b6c9a3335e16"
                },
                "fixed_width": {
                    "height": "224",
                    "width": "200",
                    "size": "375046",
                    "url": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "128492",
                    "mp4": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "183584",
                    "webp": "https://media2.giphy.com/media/5FDfOtafB4Gnwr9dBm/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/thedrewbarrymoreshow/ERJYiDug0nC8.jpg",
                "banner_image": "https://media4.giphy.com/headers/thedrewbarrymoreshow/3FhX8CFN7bpX.jpg",
                "banner_url": "https://media4.giphy.com/headers/thedrewbarrymoreshow/3FhX8CFN7bpX.jpg",
                "profile_url": "https://giphy.com/thedrewbarrymoreshow/",
                "username": "thedrewbarrymoreshow",
                "display_name": "The Drew Barrymore Show",
                "description": "The official GIPHY channel for The Drew Barrymore Show!! \r\n\r\nWeekdays | Check local listings!",
                "instagram_url": "https://instagram.com/thedrewbarrymoreshow",
                "website_url": "https://www.thedrewbarrymoreshow.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPTVGRGZPdGFmQjRHbndyOWRCbSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "TV gif. Drew Barrymore hosting the Drew Barrymore Show distorts her mouth to the side of her face like she's speaking. She holds a giant banana plushy to her ear. Text, \"Hello.\" "
        },
        {
            "type": "gif",
            "id": "d8oI97avlJAygnp7RC",
            "url": "https://giphy.com/gifs/shaymitchell-shay-mitchell-d8oI97avlJAygnp7RC",
            "slug": "shaymitchell-shay-mitchell-d8oI97avlJAygnp7RC",
            "bitly_gif_url": "https://gph.is/g/Z276Np4",
            "bitly_url": "https://gph.is/g/Z276Np4",
            "embed_url": "https://giphy.com/embed/d8oI97avlJAygnp7RC",
            "username": "shaymitchell",
            "source": "",
            "title": "Canadian Hello GIF by Shay Mitchell",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-04-03 21:39:46",
            "trending_datetime": "2021-03-03 17:15:10",
            "images": {
                "original": {
                    "height": "418",
                    "width": "480",
                    "size": "1841585",
                    "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "319534",
                    "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "853238",
                    "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "72",
                    "hash": "f13b58daf1e11dfebff55f4725aee5d1"
                },
                "fixed_width": {
                    "height": "174",
                    "width": "200",
                    "size": "379532",
                    "url": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "92730",
                    "mp4": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "239076",
                    "webp": "https://media1.giphy.com/media/d8oI97avlJAygnp7RC/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/shaymitchell/VfLTV9FaRlbL.gif",
                "banner_image": "https://media4.giphy.com/headers/shaymitchell/hM90mHGyc7kV.gif",
                "banner_url": "https://media4.giphy.com/headers/shaymitchell/hM90mHGyc7kV.gif",
                "profile_url": "https://giphy.com/shaymitchell/",
                "username": "shaymitchell",
                "display_name": "Shay Mitchell",
                "description": "Live. Laugh. GIF.",
                "instagram_url": "https://instagram.com/shaymitchell",
                "website_url": "https://www.youtube.com/ShayMitchell",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPWQ4b0k5N2F2bEpBeWducDdSQyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Celebrity gif. Shay Mitchell stands and looks at us, repeatedly waving and sarcastically knocking on a front door. Text, \"Hello?\""
        },
        {
            "type": "gif",
            "id": "yHoUhVaafTmoF1TGnH",
            "url": "https://giphy.com/gifs/peeweeherman-pee-wee-pee-wee-herman-peewee-yHoUhVaafTmoF1TGnH",
            "slug": "peeweeherman-pee-wee-pee-wee-herman-peewee-yHoUhVaafTmoF1TGnH",
            "bitly_gif_url": "https://gph.is/g/ae2X57q",
            "bitly_url": "https://gph.is/g/ae2X57q",
            "embed_url": "https://giphy.com/embed/yHoUhVaafTmoF1TGnH",
            "username": "peeweeherman",
            "source": "https://peewee.com/",
            "title": "Season 5 Hello GIF by Pee-wee Herman",
            "rating": "g",
            "content_url": "",
            "source_tld": "peewee.com",
            "source_post_url": "https://peewee.com/",
            "is_sticker": 0,
            "import_datetime": "2024-01-17 20:24:58",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "360",
                    "width": "480",
                    "size": "659391",
                    "url": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "116142",
                    "mp4": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "161974",
                    "webp": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "11",
                    "hash": "bc77dd3a008d062d34010a5757499657"
                },
                "fixed_width": {
                    "height": "150",
                    "width": "200",
                    "size": "135992",
                    "url": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "27570",
                    "mp4": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "40496",
                    "webp": "https://media0.giphy.com/media/yHoUhVaafTmoF1TGnH/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/peeweeherman/yONxoMKOaimT.png",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/peeweeherman/",
                "username": "peeweeherman",
                "display_name": "Pee-wee Herman",
                "description": "The official Pee-wee Herman GIPHY account.",
                "instagram_url": "https://instagram.com/peeweeherman",
                "website_url": "http://peewee.com",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPXlIb1VoVmFhZlRtb0YxVEduSCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPXlIb1VoVmFhZlRtb0YxVEduSCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPXlIb1VoVmFhZlRtb0YxVEduSCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPXlIb1VoVmFhZlRtb0YxVEduSCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "TV gif. Paul Reubens as Pee-wee Herman scotch tape all around head, misshaping his nose and mouth, smiles saying, “Hello!” Text, \"Hello!\""
        },
        {
            "type": "gif",
            "id": "noyBeNjH4nbtXV5ZLA",
            "url": "https://giphy.com/gifs/HBOMax-hbomax-tomandjerry-tomandjerryonhbomax-noyBeNjH4nbtXV5ZLA",
            "slug": "HBOMax-hbomax-tomandjerry-tomandjerryonhbomax-noyBeNjH4nbtXV5ZLA",
            "bitly_gif_url": "https://gph.is/g/Zy90r1b",
            "bitly_url": "https://gph.is/g/Zy90r1b",
            "embed_url": "https://giphy.com/embed/noyBeNjH4nbtXV5ZLA",
            "username": "streamonmax",
            "source": "",
            "title": "Tom And Jerry Hello GIF by Max",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2021-08-25 22:14:18",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "270",
                    "width": "480",
                    "size": "38695",
                    "url": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "28045",
                    "mp4": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "39904",
                    "webp": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "12",
                    "hash": "833cf14e567f2c8924e233c26368f530"
                },
                "fixed_width": {
                    "height": "112",
                    "width": "200",
                    "size": "12036",
                    "url": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/200w.gif?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "7599",
                    "mp4": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/200w.mp4?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "12158",
                    "webp": "https://media3.giphy.com/media/noyBeNjH4nbtXV5ZLA/200w.webp?cid=e83b58c31hmao6spkcemz1jh763w65d91fsqn4s8p9yav19k&ep=v1_gifs_search&rid=200w.webp&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/streamonmax/m0aOjjt7E6X5.jpg",
                "banner_image": "https://media4.giphy.com/channel_assets/streamonmax/UVfmcWMe6Pg8.jpg",
                "banner_url": "https://media4.giphy.com/channel_assets/streamonmax/UVfmcWMe6Pg8.jpg",
                "profile_url": "https://giphy.com/streamonmax/",
                "username": "streamonmax",
                "display_name": "Max",
                "description": "",
                "instagram_url": "https://instagram.com/HBOMax",
                "website_url": "https://bit.ly/HBOMaxGiphy",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPW5veUJlTmpING5idFhWNVpMQSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPW5veUJlTmpING5idFhWNVpMQSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPW5veUJlTmpING5idFhWNVpMQSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1lODNiNThjMzFobWFvNnNwa2NlbXoxamg3NjN3NjVkOTFmc3FuNHM4cDl5YXYxOWsmZ2lmX2lkPW5veUJlTmpING5idFhWNVpMQSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "TV gif. Jerry the mouse from Tom and Jerry has his hand on his hip and a wide smile on his face as he waves at us."
        },
    ]);

    const searchGify = async (query: string) => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key={Your API Key}&q=${query}&limit=10&bundle=clips_grid_picker`);
            console.log('check - 1', response);
        } catch (error) {
            console.log('search error', error);
        }
    }

    return (
        <>
            <SearchInput
                searchGify={searchGify}
            />
            {
                gifs.length > 0 &&
                <GifList
                    gifs={gifs}
                />
            }
        </>
    )

}

export default HomeSearch;
