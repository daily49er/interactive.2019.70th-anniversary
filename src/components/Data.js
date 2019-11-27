import React, {Component} from 'react';
import '../data.css'
import Zoom from 'react-reveal/Zoom';
import _ from 'lodash';

class Data extends Component {
    state = {
        decadeDisplayed: false,
    }
    done = () => {
        this.setState({decadeDisplayed: true}, () => {
            this.setState({typing: false})
        });
    }
    render() {
          let _ = require('underscore')

        const timelineData = [
      {
        "event": "First issue of The Forty-Niner produced",
        "date": "November 11, 1949",
        "description": "The first issue of The Forty-Niner was produced as a typewritten, mimeographed paper. The original intent of the college newspaper was to voice and represent the entire college, which it continues to do today.",
        "img": "https://drive.google.com/uc?id=1jxzuBfU-IPdeaQplcyn-qmACXAryDNrZ",
        "url": "https://drive.google.com/open?id=1hVxM_YDIqy2CaeOLlsPCSAZ3_wgYBdUg",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "The First \"49er\" Day",
        "date": "June 2, 1950",
        "description": "Women Students Organized for Service sponsored the first \"49er\" Day, the beginning of a decades-long tradition that was popular throughout the 1950s.",
        "img": "https://drive.google.com/uc?id=1fXZbjIjPqBULRJ5Ae4HkCvKszhz9H3Wc",
        "url": "https://drive.google.com/open?id=1Zxg-afJ5L8zRfDn8LUCCG3-tK7_rb6fH",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "City of Long Beach purchases land to build Cal State Long Beach",
        "date": "June 8, 1950",
        "description": "The City of Long Beach purchased a 320-acre tract of land deeded to the State to become the future home of Cal State Long Beach.",
        "img": "https://drive.google.com/uc?id=1RsRWUuAI6t9-fYQgrpPuYoO2_7c4pEQv",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Ground breaking for LA and FA buildings, the library, and the Little Theatre",
        "date": "May 20, 1953",
        "description": "A ground breaking ceremony took place to formally begin construction on the language arts and fine arts buildings, the library and the Little Theatre.",
        "img": "https://drive.google.com/uc?id=1Hmeg0W4TPfDduOHkjC9dmJGaYvpuD4AT",
        "url": "https://drive.google.com/open?id=1ad7T0yyU743ysRqfS6gBxhEibA4deqtZ",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Football team's inaugural season",
        "date": "November 23, 1955",
        "description": "The first season of football at Cal State Long Beach began under coach Mike Delotto. The team played their first home game against Cal Baptist on October 14, 1955.",
        "img": "https://drive.google.com/uc?id=1vHP4fJca89MVuQW6dbl5_HL-7j5STMJk",
        "url": "https://drive.google.com/open?id=1pUtV6_Vn-guz0x7Oi5OCvmh2JrER-Xh2",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "First dormitories built",
        "date": "September 1958",
        "description": "The first dormitories were complete by September of 1958, changing the campus from only being a \"commuter campus\" to a resident college.",
        "img": "https://drive.google.com/uc?id=1KQJMWiPEb3q9Ee8AB57JeviAGiz-Dd-W",
        "url": "https://drive.google.com/open?id=1yg4Vhh0WIYs5eaz9vYh_RRJUTAKgUe1Y",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "President P. Victor Peterson retires, succeeded by Carl W. McIntosh",
        "date": "June 3, 1959",
        "description": "Cal State Long Beach's first president P. Victor Peterson retired at age 67. He was succeeded by Carl McIntosh in the following fall semester.",
        "img": "https://drive.google.com/uc?id=1okV9lPNppWJP6_yYW1W7mp_hgyuR3_kl",
        "url": "https://drive.google.com/open?id=1znvgKUJ1rXlf_cMKljlAu7Cz2sNRpuLr",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Shark Lab established at CSULB",
        "date": 'January 1966',
        "description": "The Shark Lab was established in 1966 when Dr. Donald Nelson joined the faculty at CSULB as part of Marine Biology program.",
        "img": "https://drive.google.com/uc?id=10f0BpjMtQO8ZHvudwJn9go6a9CSw-mBv",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Forty-Niner Man makes its debut on campus",
        "date": 'January 1967',
        "description": "President Carl W. McIntosh unveiled the bronze statue titled \"the Forty-Niner man,\" sculpted by Ben Barker and sponsored by Circle K.",
        "img": "https://drive.google.com/uc?id=1RqavoWZ4g0mDUOZETYd62BsNilMsZqn2",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "La Raza established at CSULB",
        "date": 'January 1967',
        "description": "United Mexican American Students was established on campus. The organization would later become M.E.Ch.A and then La Raza.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Steve Horn begins new term as president of Cal State Long Beach",
        "date": 'January 1970',
        "description": "Steve Horn became the third university president and served for 18 years.",
        "img": "https://drive.google.com/uc?id=1-3_OGlGEK7Zv7g4S6fjhS_Tdt17Jinqf",
        "url": "https://drive.google.com/open?id=1XUad35Lyo0Y5iPghslGeW67tYBTRhSmu",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "University Student Union opens",
        "date": 'January 1972',
        "description": "The University Student Union was built with a cost of about $4.2 million.",
        "img": "https://drive.google.com/uc?id=1z6LC1BF9oTlPQE-1wR4hekZ5dJQ_sX98",
        "url": "https://drive.google.com/open?id=132vnjRhukVXgYKR-9skIgxEeQO84aLEZ",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Women's studies minor approved by the university",
        "date": "September 11, 1975",
        "description": "Women's studies was established at the university as a \"special\" minor.",
        "img": "",
        "url": "https://drive.google.com/open?id=1ZnTwBZfepOhdR6XCrO-K8T2-699p8Uy_",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "On-campus recycling center built",
        "date": 'January 1976',
        "description": "The recycling center, located across the parking lot from the Walter Pyramid, was built with funding from ASI and the city of Long Beach.",
        "img": "",
        "url": "https://drive.google.com/open?id=12U1nK--Uut7WOO3er2qcV_5offTKQxjU",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Japanese Garden opens",
        "date": "November 26, 1980",
        "description": "Founded by philanthropist Loraine Miller Collins in memory of her late husband Earl Burns Miller, the Japanese Gardens opened after three years of construction.",
        "img": "https://drive.google.com/uc?id=1QdaxF73pkB7PK5z--Z276Ecpg9K3_8wb",
        "url": "https://drive.google.com/open?id=1IWYMY3OmlrBguRrZtq2_YO9IQ9NbgSNm",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB gives \"suvival training\" to minority students",
        "date": "July 26, 1987",
        "description": "Students belonging to a minority group were trained on how to be successful at school because they were statistically more likely to drop out. University faculty recognized that these students would become the majority of the population by 2000, but were not being efficiently educated.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Black woman as interim president",
        "date": "February 11, 1988",
        "description": "After the retirement of Steve Horn,  the university hired June Cooper as interim president, making her the first Black woman to oversee the campus.",
        "img": "https://drive.google.com/uc?id=1rZxXg-WWmTTHjYUkRgho7DKlnbxurC44",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "I-House opens",
        "date": "August 25, 1988",
        "description": "The International House, intended for pairing international students and local students in a dorm, opened its doors.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Civil Rights Activist Maya Angelou visits CSULB",
        "date": "December 4, 1991",
        "description": "A two-hour event, \"An Evening With Maya Angelou\" drew a crowd of more than 900 students, faculty and staff. Her poetry and songs addressed multicultural issues.",
        "img": "",
        "url": "https://drive.google.com/open?id=11D29jVzBwzNdEFVJl_nLW_hlQcCvQKi0",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "LBSU football program officially ends",
        "date": "December 10, 1991",
        "description": "The football program at CSULB dissolved due to budget cuts, a poor winning record, and the death of 1990 former head football coach George Allen.",
        "img": "https://drive.google.com/uc?id=1GYg311XTVymBGISeOZISOd2ZLHC19wVc",
        "url": "https://drive.google.com/open?id=1YU5dUhqtkKtXdAUwZOsBlwWvWqoibDQs",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Foreign language computer lab opens",
        "date": "December 20, 1991",
        "description": "A 33-station computer lab and satellite dish was added to the Language Arts Building, providing students access to audio and graphic programs to learn languages.",
        "img": "",
        "url": "https://drive.google.com/open?id=10mpKdiutFtkT_kLbAL2QG4gQDoukB4i2",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Building for College of Business Administration opens",
        "date": 'January 1991',
        "description": "The state-of-the-art building, featuring modern lecture halls and decision-support laboratories with multi-media capability, opened its doors for the first time.",
        "img": "https://drive.google.com/uc?id=1XOd_Iy0kQr527Zf57SmWkgLqTr_QEGL_",
        "url": "https://drive.google.com/open?id=1CLz9Bl7cMSxfcETMFMghQVzi-GRS1XUk",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "LA riots force campus shutdown",
        "date": "April 30, 1992",
        "description": "CSULB President Curtis McCray issued a campus shutdown at 4 p.m. due to the increasing safety concerns in relation to the L.A. riots.",
        "img": "",
        "url": "https://drive.google.com/open?id=1bVpRDkuLmhw71yMlQwabjQ-I2ns94Yxr",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Long Beach state baseball wins Big West Conference",
        "date": "May 14, 1992",
        "description": "In the spring of 1992, the Dirtbags started their three-year consecutive reign as champions at the Big West Conference.",
        "img": "https://drive.google.com/uc?id=1VXDoy2iJSudIdwpP5idpp-6Ibzul7FEG",
        "url": "https://drive.google.com/open?id=1DjubUcdMmPgT9WU2btMeFoZaOWW3p_D-",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Richard & Karen Carpenter Performing Arts Center opens",
        "date": 'January 1994',
        "description": "",
        "img": "https://drive.google.com/uc?id=14Xu-rQTzxfbPoFhJkJYpwD5ny_ttJk7K",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Robert C. Maxson named CSULB President",
        "date": "March 23, 1994",
        "description": "Maxson was officially announced as new president by CSU Chancellor Barry Munitz and took office June 1.",
        "img": "https://drive.google.com/uc?id=1heOgRntroPMoljO5FCzomGVvz9yjZ2J3",
        "url": "https://drive.google.com/open?id=1VTvCnTWV3izbDtCqCkZQ1Qgl_MuLLV76",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Online Forty-Niner becomes a weekly version of the Daily Forty-Niner",
        "date": "Septmber 1, 1994",
        "description": "",
        "img": "https://drive.google.com/uc?id=1H7mcXxDFK1ySpogUngnQzw6H2vHlMDj3",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "The Walter Pyramid opens",
        "date": "November 5, 1994",
        "description": "The Walter Pyramid, known at the time as The Pyramid, opened to a crowd of an estimated 10,000 people, much more than the anticipated 2,500. The 178-foot tall arena cost $22 million, with an initial seating capacity of 4,200.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Walter_Pyramid.jpg",
        "url": "https://drive.google.com/open?id=1ynIIEQWxUhCiDE2B1BYgplX6WisVouxc",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB men's basketball wins Big West Conference",
        "date": 'January 1995',
        "description": "The team became champions at the 1995 Big West Conference",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "The central plant is completed",
        "date": 'January 1997',
        "description": "The central plant finished construction at the university, providing campus buildings with air conditioning and heating, with the exception of the Pyramid, Carpenter Performing Arts Center and University Music Center.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB women's volleyball have a winning season",
        "date": 'January 1998',
        "description": "The women's volleyball team became the first NCAA Division I team in history to have an undefeated season and take home the 1998 National Championship.",
        "img": "https://drive.google.com/uc?id=1qaLkrkj9p7uahu7rBWC-LHOWVQnSVAMK",
        "url": "https://drive.google.com/open?id=1-qQoxyqX2G4Ew3GRVNcR_k1NRbjNPPMC",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB closes for the remainder of the day, prompted by 9/11 attacks",
        "date": "September 11, 2001",
        "description": "Following the news that several U.S. cities were attacked, including the World Trade Center and the Pentagon, CSU Chancellor Charles B. Reed announced the closure of all 23 CSU campuses.",
        "img": "",
        "url": "https://drive.google.com/open?id=1bCDtSohCF466iMdfTYfKZvOVqyIwn7Pm",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Broman Hall and new Molecular and Life Science Center construction begins",
        "date": 'January 2002',
        "description": "The school began construction on Brotman Hall and the Molecular and Life Science Center. The Fine Arts buildings also undergo updates.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Arnold Schwarzenegger visits CSULB",
        "date": "September 3, 2003",
        "description": "Arnold Schwarzenegger made his first public appearance at the university during his gubernatorial campaign.",
        "img": "https://drive.google.com/uc?id=1KbWLqEYGiQV0luDIekv9ojKXWiPzI34V",
        "url": "https://drive.google.com/open?id=1QqlUY07ILvB_LK7D28TykQYh0A8MB5zO",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB students stage walk-out in protest of raised tuition",
        "date": 'January 2004',
        "description": "The California State Student Association organized a statewide protest on college campuses in response to Gov. Schwarzengger's proposed budget cut and tuition hike. Students marched outside Brotman Hall, which was locked down and guarded by police to keep protestors away.",
        "img": "https://drive.google.com/uc?id=1nt4MPk7NVZzDV5M8O_CGlc8pvilpuNkU",
        "url": "http://web.csulb.edu/~d49er/archives/2005/spring/news/volLVno106-csulb.shtml",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB President Robert C. Maxson retires, succeeded by F. King Alexander",
        "date": 'January 2006',
        "description": "Maxson retired after 11 years and was succeeded by F. King Alexander as president.",
        "img": "https://drive.google.com/uc?id=1L-YefW9X7YN6tzEucfrTuCHwniJKrp3Y",
        "url": "https://drive.google.com/open?id=1W9S2l7tnGpW4zcifcCLFvQTmo4Fuh6Md",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Homecoming returns to CSULB",
        "date": "February 24, 2007",
        "description": "With the work of the CSULB Alumni Association, 49er Athletic Association, and Associated Students Inc., Homecoming officially made a comeback to campus with the theme \"Back to 49er Days... The Dawn of Tradition.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Music department gets renamed",
        "date": "March 2008",
        "description": "The name was officially changed to The Bob Cole Conservatory of Music.",
        "img": "",
        "url": "https://drive.google.com/open?id=1dBhevBzwTGOvxLCEXj_XwBINYwSqubid",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB launches first President's Forum on International Human Rights",
        "date": 'January 2008',
        "description": "The university organized the first President's Forum on International Human Rights. The 2008 theme was \"Modern Genocides and Global Responsibilities\" and over 6,000 people participated, including students, faculty, staff and members of the community.",
        "img": "",
        "url": "",
        "text": "",
        "tags": "",
        "color": ""
      },
      {
        "event": "Student Recreation and Wellness Center Opens",
        "date": "September 20, 2010",
        "description": "Celebrity fitness instructor Denise Austin spoke at the grand opening of the $61 million Student Recreation and Wellness Center.",
        "img": "https://drive.google.com/uc?id=1Oi16YAVKWAx2tcY2uvgZehaWeO8kOmU7",
        "url": "https://daily49er.com/news/2010/09/20/celebrity-fitness-alumna-opens-rec-center/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB dedicates new Hall of Science",
        "date": "September 23, 2011",
        "description": "CSULB opened the Hall of Science building to ASI officials on Friday, Sept. 23. The $102 million building proved to be the largest capital building project in the campus’ 62-year history and the largest and most expensive building project in the California State University system.",
        "img": "https://drive.google.com/uc?id=12iCC9vZQAP8qlhZevNHhtmn7CUHOXsgC",
        "url": "https://daily49er.com/news/2011/03/28/asi-officials-receive-grand-tour-of-csulbs-new-science-building/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB, Stefan Agregado, student selected 2011 national winner for ‘breaking news’ photography by Society of Professional Journalist",
        "date": "May 11, 2012",
        "description": "CSULB senior Stefan Agregado was named the national winner of the Society of Professional Journalists 2011 Mark of Excellence Award for breaking-news photography.",
        "img": "https://drive.google.com/uc?id=17B9Djwdx4yJlwyD9boCfbr92zEse4FfX",
        "url": "https://daily49er.com/news/2011/11/15/students-clash-with-police-as-csu-raises-tuition/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Jane Close Conoley announced as first female president of CSULB",
        "date": "January 29, 2014",
        "description": "",
        "img": "https://drive.google.com/uc?id=1eFwlQiTFyh0lIQxI3YsEyhC4_AVQdU4u",
        "url": "https://daily49er.com/news/2014/01/29/csulb-announces-its-first-female-president/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "CSULB dream center is fourth to open in CSU system",
        "date": "March 9, 2015",
        "description": "CSULB held an open house for the new Dream Success Center that financially, academically and emotionally helps undocumented students attending CSULB. This marked the fourth center to open in the California State University system, joining Fullerton, Northridge and Los Angeles.",
        "img": "https://drive.google.com/uc?id=1XWRo3pJZ1YFMp5M3u_-L7WvXEfWZA9XR",
        "url": "https://daily49er.com/news/2015/03/09/csulb-dream-center-is-fourth-to-open-in-csu-system/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Long Beach State men’s volleyball wins 2018 NCAA Championship",
        "date": "May 5,2018",
        "description": "Long Beach State won its first national championship since 1991 in a blow-for-blow battle against the UCLA Bruins Saturday at the Pauley Pavilion.",
        "img": "https://drive.google.com/uc?id=1RPoSRV1KbtIzMcsMUXJyTjO1jHPNwDGy",
        "url": "https://daily49er.com/sports/2018/05/05/long-beach-state-mens-volleyball-wins-2018-ncaa-championship/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "President Conoley confirms retirement of Prospector Pete",
        "date": "September 11, 2018",
        "description": "President Jane Close Conoley announced the “retirement” of the 51-year-old Prospector Pete mascot. An ASI resolution recognizing prospetors' role in the California indigenous genocide prompted this decision.",
        "img": "https://drive.google.com/uc?id=1sctMDYxF1yjGFBDDEm_7g41bUhoLbHnV",
        "url": "https://daily49er.com/news/2018/09/11/lbsu-opts-to-move-prospector-pete-statue-and-get-a-new-mascot/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Long Beach State builds new CCPE building that uses renewable energy",
        "date": "October 2, 2018",
        "description": "Long Beach State became home to the first net-zero energy structure in the Cal State University system following the completion of the College of Continuing and Professional Education building.",
        "img": "https://drive.google.com/uc?id=1a4AiQnQkyshILJvqDXhUz2aXOYadExIs",
        "url": "https://daily49er.com/news/2018/10/02/long-beach-state-builds-new-ccpe-building-that-uses-renewable-energy/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Student Success Center now open for students",
        "date": "January 27, 2019",
        "description": "The Student Success Center, located on upper campus in front of the bookstore, opened early January after over a year of construction.",
        "img": "https://drive.google.com/uc?id=1-FDAEf6apc19i4W1fDCDf_pd0eNRjh7c",
        "url": "https://daily49er.com/news/2019/01/27/lbsu-student-success-center-now-open-for-students/",
        "text": "read more",
        "tags": "",
        "color": ""
      },
      {
        "event": "Long Beach Men's Volleyball wins National Championship",
        "date": "May 4, 2019",
        "description": "Long Beach State defeated Hawai’i in front of a crowd of 3,824. Long Beach claimed back-to-back national championships with a 3-1 win.",
        "img": "https://drive.google.com/uc?id=1pshcnFiL_X70_jR7R0ydzlW50B6RcgGM",
        "url": "https://daily49er.com/sports/2019/05/04/long-beach-wins-national-championship/",
        "text": "read more",
        "tags": "",
        "color": ""
      }

    ];

    // const cats = timelineData.reduce((catMemo, { date, event }) => {
    //   (timelineData[new Date(date).getFullYear()] = timelineData[new Date(date).getFullYear()] || []).push(event);
    //   return catMemo;
    // }, {});
    // console.log(cats);

    //Math.floor(year/10)*10

    const alldates = _.groupBy(timelineData, function(obj) {
    const decade = Math.floor(new Date(obj.date).getFullYear()/10)*10;
    return decade;
    });
    console.log(alldates);
    // return alldates.sort().map(rows => {
    //     var row = rows.map(cell => <td>{cell}</td>);
    //     return(
    //     <tr>{row}</tr>
    //     );



    const decades = Object.keys(alldates).map((key) =>
       <div key={key}>
            <div className="decade"><h1>{key + "'s"}</h1></div>

        {alldates[key].sort( (a, b) => new Date(a.date) - new Date(b.date) ).map((event) =>
            <div className="timeline-item" key={event.event}>
                <Zoom left>
                <div className="timeline-item-content">

                    <span className="tag" style={{ background: event.color }}>
                        {event.tags}
                    </span>
                    <time>{event.date}</time>

                    <h1>{event.event}</h1>
                    <img
                        src = {event.img}
                    />
                    <p>{event.description}</p>
                    {event.url ? (<a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {event.text}
                    </a>) : <h4></h4>}
                    <span className="circle" />
                </div>
                </Zoom>
                </div>
        )}
        </div>
    );

    // });


    // const events = timelineData.sort( (a, b) => new Date(a.date) - new Date(b.date) ).map((event) =>

    //         <div className="timeline-item">
    //             <Zoom left>
    //             <div className="timeline-item-content">

    //                 <span className="tag" style={{ background: event.color }}>
    //                     {event.tags}
    //                 </span>
    //                 <time>{event.date}</time>

    //                 <h1>{event.event}</h1>
    //                 <img
    //                     src = {event.img}
    //                 />
    //                 <p>{event.description}</p>
    //                 {event.url ? (<a
    //                     href={event.url}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     >
    //                     {event.text}
    //                 </a>) : <h4></h4>}
    //                 <span className="circle" />
    //             </div>
    //             </Zoom>
    //         </div>

    //     );

        return (
             <div className="Data">
                <div className="background-image"></div>
                <center>
                {/* <h1>70 YEARS OF DAILY FORTY-NINER COVERAGE</h1> */}
                <h1>
                70 Years of Daily Forty-Niner Coverage
                </h1>
                <h4>
                On September 28, 1949, Los Angeles-Orange County State College began its first day of classes in a converted apartment building at 5401 E. Anaheim St. with 169 enrolled students and 13 full-time faculty. Less than one month later, the Daily Forty-Niner was established as the first organization at the university and has been covering campus news for 70 years.
                <br></br>
                <br></br>
                <b>Scroll below to explore 70 years of Long Beach State history told through
                <br></br>70 years of Daily Forty-Niner coverage.</b>
                </h4>
                </center>
                {/* <Timeline data={this.state.timelineData}/> */}

                <div className="timeline-container">

                    {decades}
                    {/* <Timeline events = {this.state.timelineData}/>
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <span className="tag" style={{ background: black }}>
                                {"wow"}
                            </span>
                            <time>{"October 10, 2019"}</time>
                            <p>{"Hello world"}</p>
                            <span className="circle" />
                        </div>
                    </div> */}
                </div>
                <center>
                <h4>Content copyright © 2019 Daily Forty-Niner.</h4>
                <h4>
                    Built by Samantha Hangsan, Paula Kiley, Nahid Ponciano, Kaleen Luu, and Jonathan Majarrez.
                </h4>
                </center>
            </div>
        );
    }
}

export default Data;