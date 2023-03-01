import { ReactNode } from "react";
export const debugEvents = {
  elc: {
    clubs: [
      {
        name: "SSN English Literary Club",
        imgsrc: "elc.jpeg"
      },
      {
        name: "SNU English Literary Club",
        imgsrc: "snuelc.jpg"
      }
    ],
    events: [
      {
        eventNames: "Debate",
        description:
          "You'll meet many people on your way to the lost continent who you'll have to verbally spar with to get your way. Don't hold back when it comes to debate; only the toughest, and the audacious can survive the Lost continent.Come join us at Instincts Debate - put your skills to test against the other explorers. May the best survive the journey!",
        rules: [
          {
            rules: [
              "Each debating round will consist of two teams - one to propose(for) the motion and one to oppose(against) the motion.",
              "3 minutes for each speaker to present their argument and 1 minute for rebuttal each.",
              "Preparation time will be given for each topic.",
              "Registration is on a first-come-first-serve basis.",
            ],
          },
        ],
        date: "March 10, 2023",
        time: "9:30AM TO 4:30PM",
        venue: "CSE LH45",
        team_size: "2",
        type: "Team",
        organizers: [
          {
            name: "Shivangi Pandey",
            phone: "8095295398",
          },
          {
            name: "Aditi Kannan",
            phone: "9791011123",
          },
          {
            name: "Nirgun",
            phone: "8072237166",
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
      {
        eventNames: "Navigate (Creative Writing)",
        description:
          "Draw us a map with your words, let your metaphors be your SOS signals and while we make our way to rescue you from the lost continent, please feel free to bask in the beauty of your descriptions. ",
        rules: [
          {
            rules: [
              "The poems must be entirely the original work of the participant.",
              "Late submissions will result in a deduction of points.",
            ],
          },
        ],
        date: "TBD",
        time: undefined,
        toTime: undefined,
        venue: "TBD",
        type: "Individual",
        organizers: [
          {
            name: "Lohita S",
            phone: "7550175954",
          },
          {
            name: "Shama",
            phone: "6383142169",
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
      {
        eventNames: "Potpourri",
        description:
          "Potpourri a mixture you’ll find when you land. Sweet or venomous you’ll never know. Solve the puzzles with your loyal band. With every win your team’s honour will grow",
        rules: [
          {
            rules: [
              "Two round event.",
              " Round 1 is a written quiz with a time limit of 1 hour.",
              "Teams that clear first round enter round 2.",
              "Round 2 is a miscellaneous round of team games",
            ],
          },
        ],
        date: "TBD",
        time: undefined,
        venue: "TBD",
        team_size: "2-3",
        type: "Team",
        organizers: [
          {
            name: "Sriya Vemuri",
            phone: "8939756211",
          },
          {
            name: "Karunya",
            phone: "73056 34359",
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
      {
        eventNames: "Shipwreck",
        description:
          `Well, well, well. So you're on your way to the Lost Continent? Not so fast.
          A cruel storm ravages your ship and there’s only one life jacket available. 
          Successfully convince the captain why you deserve the life jacket and you live to see the treasures of the Lost Continent, fail and you’ve spoken your last words. 
          `,
        rules: [
          {
            rules: [
              "Shipwreck is an individual event, participants can perform in English or Tamil.",
              "Participants will be assigned famous personalities.",
              "Judges' decisions are final."
            ],
          },
          {
            ruleHead: "Format",
            rules: [
              "Prelims with 3-5 minutes of speaking time.",
              "The best participants in the prelims will be shortlisted for the Finals, the rules of which are based on the judges discretion."
            ],
          }
        ],
        date: "March 11, 2023",
        time: "10AM - 1PM",
        venue: "Open Air Theatre",
        type: "Individual",
        organizers: [
          {
            name: "Arjun M",
            phone: "9500147579",
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
      {
        eventNames: "Just A Minute (JAM)",
        description:
          "Be wary on your journey to the lost continent. Bandits and thieves lurk in the shadows and capture unsuspecting heroes at midnight. They say that several hostages are held in a single room and only one can get out.  To escape and flee you must speak a minute error free. So tell me are you a worthy candidate to find the legendary lost continent?",
        rules: [
          {
            rules: [
              "Each round of this game is for a duration of 60 seconds each.",
              "Points are awarded for the amount of time spoken for, as well as correct objections.",
              "In case of a wrong objection, points will be deducted.",
            ],
          },
        ],
        date: "March 11, 2023",
        time: "2PM - 5PM",
        venue: "CSE Lab",
        type: "Individual",
        organizers: [
          {
            name: "D Shruthi",
            phone: "9840651057",
          },
          {
            name: "R. Krithika Dinushini",
            phone: "9363048686",
          },
          {
            name: "Maanya C Bharath",
            phone: "9176716052"
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
      {
        eventNames: "SUCC (Stand Up Comedy Contest)",
        description:
          "Prepare to be transported on a hilarious journey to a forgotten land, as we bring you a comedy event like no other. Join us for an unforgettable evening of laughter and entertainment, where you'll discover a new world of humor and adventure. Get ready to experience the unexpected and leave your worries behind, as we take you on a journey to a world that's been lost in time.",
        rules: [
          {
            rules: [
              "Keep your sets under 5 minutes.",
              "Sets in English are preferred, Tamil and Hindi are okay as well. ",
              "Obscenity is to be avoided!",
            ],
          },
        ],
        date: "March 10, 2023",
        time: "9:30AM - 12:30PM",
        venue: "IT Seminar hall",
        type: "Individual",
        organizers: [
          {
            name: "Supraja",
            phone: "9840774624",
          },
          {
            name: "Shan",
            phone: "6381284982",
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSezMf_kEPptkAt5XfB5p556E6TFizARAGQLTIacceFX38DHMw/viewform?embedded=true"
      },
    ]
  },
  gaming: {
    clubs: [
      {
        name: "SSN Gaming Club",
        imgsrc: "gaming.png"
      },
      {
        name: "SNUC Gaming Club",
        imgsrc: "snucgame.png"
      }
    ], events: [
      {
        eventNames: "Valor Cup",
        description:
          "This is a Valorant game event. Plan your strike and plant the spike! Clutch your way to the top in classic 5v5 team battles.",
        date: "March 10, 2023",
        time: "9:30AM - 1:30PM",
        venue: "CSE Lab",
        type: "Team",
        team_size: "5",
        organizers: [
          {
            name: "Vinay Angara",
            phone: "9384619532",
          },
          {
            name: "Pradeeshwar",
            phone: "9952353704",
          }
        ],
        ruleBook:
          "https://drive.google.com/open?id=1jw2fWcqE8x6kGJja78Gzb2NcMhVXBfup",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSd31jxKGBBj1kkpkZKR5ecF8BcL_FXoK4n7vb-d0jqpX8MhjA/viewform?embedded=true"
      },
      {
        eventNames: "CODM-MAYHEM",
        description:
          "This is an exciting and competitive mobile gaming multiplayer tournament, where you will get to showcase your skills and strategies in a series of rounds. The objective is to defeat opposing teams in a variety of game modes using various weapons and tactics.",
        date: "TBD",
        time: "10AM-2PM",
        venue: "CSE LH49",
        type: "Team",
        team_size: "5-6",
        organizers: [
          {
            name: "Anish Panicker",
            phone: "9618314560",
          },
          {
            name: "Adarsh Kumar Sahu",
            phone: "6381907955",
          }
        ],
        ruleBook:
          "https://drive.google.com/open?id=1HrIkmR93Gl9Dw6rSEmMGrc6kKvkW5CAe",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSfvR4UVLdkfPWqe9Av4UdOeg35D90eiOkHnQ4jD7s24nAtDQQ/viewform?embedded=true" 
      }
    ]
  },
  sfc: {
    clubs: [
      {
        name: "SSN Film Club",
        imgsrc: "sfc.png"
      },
      {
        name: "SNUC Film Club",
        imgsrc: "snufc.jpg"
      }
    ], events: [
      {
        eventNames: "Reels of Fire",
        description:
          "Reels of Fire is a fiercely competitive short film contest, where aspiring filmmakers worldwide can create a diverse array of short films and vie for a chance to win the prestigious ‘Best Short Film’ Award, amongst other categories. The submitted shorts are perused by the members of the SSN Film Club, where 10 of the best films are shortlisted. The shortlisted shorts will get screened at our auditorium on the day of the main event. Our panel of esteemed individuals from the Kollywood industry will judge the shorts, and award them with prizes accordingly. Reels of Fire continues to remain a prestigious platform for budding talents. Here, they showcase their works not only to a large audience of young, passionate, and enthusiastic filmgoers but also to the people in the industry who can take them to the next level.",
        rules: [
          {
            rules: [
              "Duration - Films must be 30 minutes or shorter. However longer films will be considered if we find them exceptional.",
              "Only films made after or during the month of January 2021 may be submitted.",
              "Obscenities - Films must put to use the relevant censors to avoid the blatant display of obscenities. (Beep sounds for verbal obscenities, blurs for visual, etc)",
              "Language - Films in all languages are welcome. All films regardless of language must be subtitled in English.",
              "Final Verdicts - The decisions made by the judges are completely final and must be treated as such.",
            ],
          },
        ],
        date: "March 10, 2023",
        time: "9AM - 12AM",
        venue: "Main Auditorium",
        type: "Lone-Wolf / Team",
        team_size: "1-4",
        organizers: [
          {
            name: "Raghupathy J",
            phone: "9962480903",
          },
          {
            name: "Dharshanraj B",
            phone: "9940630160",
          },
          {
            name: "Tejaswini",
            phone: "6309011008",
          },
          {
            name: "Muhilan",
            phone: "7598955470",
          },
        ],
        ruleBook:
          "https://drive.google.com/open?id=1XPZb8Xb_pwWayT4Jx8kYhQagMWOf9fad",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSf3OFJzHRN08nTRPgkY_02G8MYPa3-Ps-fpoD7wZ8XS_jmsrA/viewform?embedded=true"
      },
      {
        eventNames: "Lights, Camera, Sale!",
        description:
          "Lights Camera Sale, an auction event. Several teams will compete by bidding on a topic or question related to movies. There are three rounds where the topic is given each time. The different teams are expected to bid and name the different answers in the category in a stipulated time. Teams are eliminated in each passing round according to the points scored. This is the first time we are conducting this particular event as part of Instincts, the biggest cultural fest in South India.",
        rules: [
          {
            rules: [
              "The entry fee per person is Rs.50/-",
              "This game event can participate as an individual as well as a team of two.",
              "There are three rounds and each round is an elimination round.",
              "Based on the scores, the team will be proceeding to the next round.",
              "The first round is an Auction round followed by Kahoot and Connexion is the final round.",
            ],
          },
        ],
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Lone-Wolf / Team",
        team_size: "2",
        organizers: [
          {
            name: "Raghupathy J",
            phone: "9962480903",
          },
          {
            name: "Dharshanraj B",
            phone: "9940630160",
          },
          {
            name: "Tejaswini",
            phone: "6309011008",
          },
          {
            name: "Mughilan",
            phone: "7598955470",
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSdOt5JqfqVJbuc9Ql7r9ZoiGBjz3FjK95LTnwxBrrJ3j-JbNg/viewform?embedded=true"
      },
    ]
  },
  sdc: {
    clubs: [
      {
        name: "Gradient - Design Club",
        imgsrc: "sdc.png"
      },
      {
        name: "Aura - The SNUC Design Club",
        imgsrc: "aura.png"
      }
    ], events: [
      {
        eventNames: "Designathon",
        rules: [
          {
            rules: [
              "Open to all designers and design enthusiasts.",
              "Open to all college students, and inter-college teams are allowed.",
              "Topics will be given on the spot for each of the tracks mentioned.",
              "You will have around 2.5 hrs to design.",
              "You are free to use any design tool.",
              "Plagiarism will result in disqualification.",
              "Each track will have a separate winner and runner.",
              "Please bring your own laptops and stationeries for designing. (you will be provided with extension cables and charging spots)",
            ],
          },
        ],
        date: "March 10th, 2023",
        time: "10:30PM - 1:30AM",
        venue: "SNU Classrooms",
        type: "Lone-Wolf / Team",
        team_size: "2 (Max)",
        organizers: [
          {
            name: "Gayathri",
            phone: "87544 07646",
          },
          {
            name: "T. Aditya Varun",
            phone: "95660 73896",
          },
        ],
        showDecor: true,
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeaVB_I9GteQ8rzaMOLMrgrHOUrGIl2JYXsS4t5r9XgxuRucA/viewform?embedded=true"
      },
      {
        eventNames: "UXpedition",
        description: `Ahoy! Set sail on a design adventure with our thrilling UI/UX event. Participants will embark on a journey to create user-centered interfaces and experiences inspired by the high seas. With unique prompts, designers will have three hours to showcase their skills and chart a course to design glory. Participants will be judged based on their approach, innovation, and execution of their designs. Battle against your fellow designers and discover hidden treasures as you bring your designs to life. So hoist the sail, grab your design tools, and join us for this exciting voyage!`,
        rules: [
          {
            rules: [
              "Please bring your own laptops for designing. You will be provided with extension cables and charging ports.",
              "Open to all designers and design enthusiasts.",
              "Open to all college students, and inter-college teams are allowed.",
              "Themes will be given on the spot.",
              "You will have around 3 hours to design..",
              "You are free to use any design tool.",
              "Plagiarism will result in disqualification.",
              "Themes will be given on the spot by the judges and teams can choose one for which time will be given.",
              "Participants need to focus on providing ideation, research and user interactions.",
              "Evaluation criteria is emphasized on novelty and then the presentation ie. aesthetics.",
              "Major focus to be placed on the idea, creativity and empathy, rather than delivering a proper final design.",
              "The participants will have to showcase their design and its use case along with a user-centric justification, - First using multiple low fidelity designs, Then with maximum 2 high fidelity designs."
            ],
          },
        ],
        date: "March 11th, 2023",
        time: "10:30PM - 1:30AM",
        venue: "SNU Classrooms",
        type: "Team",
        team_size: "2-3",
        organizers: [
          {
            name: "Sravya",
            phone: "82486 96034",
          },
          {
            name: "Paul",
            phone: "97909 18510",
          },
          {
            name: "Vishwajith",
            phone: "70129 74738",
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSfDGtIR0YBNzWylrDw2Dj_gjagksMjN33BeEvixJrQ_68Xfvw/viewform?embedded=true"
      },
    ]
  },
  smc: {
    clubs: [
      {
        name: "SSN Music Club (SMC)",
        imgsrc: "smc.png"
      },
      {
        name: "SNUC ISAI",
        imgsrc: "isai.jpg"
      }
    ], events:
      [
        {
          eventNames: "Anunad",
          description: "Anunad is SMC's eastern solo singing event. It is the right place if you are looking to prove your mettle as a singer. Flaunt your singing skills in the light music solo vocal event. Enthrall us with your voice, all eyes are going to be on you and the stage is all yours. The event is not to be missed by all you aspiring singers!",
          date: "TBD",
          time: undefined,
          venue: "TBD",
          type: "Individual",
          rules: [
            { rules: ["All Participants MUST be college students with a valid college ID card.", "Registration Fee can be paid on spot", "This is a two stage event. Both Prelims and Finals will be conducted offline.", "Songs performed by participants must be in Indian languages. The presence of a considerable amount of foreign language in performance might lead to disqualification and this is up to the judge."] },
            {
              ruleHead: "Prelims",
              rules: ["Each participant will be given 4 minutes with set up.", "Use of a karaoke backing track is allowed. Participants using backing tracks must submit their tracks (in a USB device) at the desk before the event begins, aux connections will be available too.", "Instrumental accompaniment is not allowed.", "Use of Shruti box is permitted; use of a metronome isn't.", "The judge's decision will be final."]
            },
            {
              ruleHead: "Finals",
              rules: ["The participant will be given 7 minutes to perform two songs; variety in the genre of songs performed will fetch more points.", "One instrumental accompaniment may be used.", "Rest of the rules are the same as in the prelims round."]
            }
          ],
          organizers: [
            {
              name: "Swetha",
              phone: "9486558751"
            },
            {
              name: "Sowmya",
              phone: "6385414492"
            }
          ],
          form: "https://docs.google.com/forms/d/e/1FAIpQLSezoF33tVmdLsEp_OJjOpyv6RCtmFXySBRcnLNpasoAfZ--5g/viewform?embedded=true"
        },
        {
          eventNames: "Riff Off",
          description: "Riff Off is the solo instrumental event where you can showcase your talent as an individual. Be it with a guitar or drums, literally anything under the sky defined to be an instrument, the stage is yours! Come participate and explore your boundaries as a musician! ",
          date: "TBD",
          time: undefined,
          venue: "TBD",
          type: "Individual",
          rules: [
            { rules: ["All Participants MUST be college students with a valid college ID card.", "Registration Fee can be paid on spot", "This is a two stage event. Both Prelims and Finals will be conducted offline.", "Songs performed by participants must be in Indian languages. The presence of a considerable amount of foreign language in performance might lead to disqualification and this is up to the judge."] },
          ],
          organizers: [
            {
              name: "Matthew",
              phone: "8939972777"
            },
            {
              name: "Arnav",
              phone: "9899347675"
            }
          ],
          form: "https://docs.google.com/forms/d/e/1FAIpQLSezoF33tVmdLsEp_OJjOpyv6RCtmFXySBRcnLNpasoAfZ--5g/viewform?embedded=true"
        },
        {
          eventNames: "Band Hunt",
          description: `Band hunt is SMC's Eastern and Western band event. If you love playing Carnatic fusion, rock ‘n’ roll, blues, pop or light film music with your band, this is the right place for you. Come battle it out with other amazing bands and prove that you have what it takes to be the best.
          Music Lovers everywhere, this event is handcrafted just for you. Don't miss it!!
          `,
          date: "TBD",
          time: undefined,
          venue: "TBD",
          type: "Team",
          team_size: "3-10",
          rules: [
            { rules: ["Participants MUST be college students with a valid college ID card and are required to purchase individual music passes.", "Members of the band need not be from the same college. Cross college bands are allowed.", "Music of any genre and language is permitted.", "Original compositions will be given extra points when compared to covers."] },
            {
              ruleHead: "Online Shortlisting",
              rules: ["Bands should send in an online link of their performance.", " Note that the drive link shared must be accessible by ‘Anyone with the Link’.", "Bands should send in an online link of their performance. Time Limit is 5 minutes. The deadline for sending in the online submission is 3rd March"]
            },
            {
              ruleHead: "Finals",
              rules: ["Each band(if shortlisted) will be given 18 mins on stage inclusive of setup time.", "Drum kit and Keyboard stand will be provided.", "Obscenity of any kind is strictly prohibited.", "The decision of the judges will be final and binding."]
            }
          ],
          organizers: [
            {
              name: "Nikhil",
              phone: "9566216996"
            },
            {
              name: "Hrithin",
              phone: "9941669034"
            }
          ],
          form: "https://docs.google.com/forms/d/e/1FAIpQLSezoF33tVmdLsEp_OJjOpyv6RCtmFXySBRcnLNpasoAfZ--5g/viewform?embedded=true"
        },
      ]
  },
  spc: {
    clubs: [
      {
        name: "SSN Photography Club",
        imgsrc: "spc.png"
      },
      {
        name: "Capturesque",
        imgsrc: "capturesque.png"
      }
    ], events: [{
      eventNames: "Online Photography Contest",
      description: "Got a knack for composing great pictures? Or do you look for frames whenever your eyes are open? If your answer is yes for either of the questions, flex your talents here and win alluring prizes.",
      date: "On/Before March 5",
      time: undefined,
      venue: "Online",
      type: "Individual",
      rules: [{ rules: ["Only one submission per participant (Open to all college students)", "Theme: Portraits", "Participants must follow @ssn_photography_club, @snuc_capturesque and @thiscamerawoman.", "Basic Colour Correction is allowed; photo manipulation is to be prohibited. Plagiarism will lead to disqualification.", "Pictures to be sent as .jpeg/.jpg (along with RAW if picture has been edited)", "Pictures with watermarks will not be evaluated.", "Your submission along with your Name and Contact Details is to be emailed to ssnphotographyclub@ssn.edu.in with the subject OPC '23 (Format for file name: FullName_College)", "Deadline: On / Before March 5, 2023.", "Entries will be judged by Sneha Nair (@thiscamerawoman), a Photographer and Cinematographer. Decision of the judge is final and binding."] }],
      organizers: [
        {
          name: "Venkatanathan M",
          phone: "+91 9176762175"
        },
        {
          name: "Krishna K",
          phone: "+91 8618584124"
        }
      ],
      form: "https://forms.gle/vVvYh6VEG4Yc3PHAA"
    },
    {
      eventNames: "Let Experts Talk:",
      date: "March 10, 2023",
      time: "1 – 3:30 PM",
      showDecor: true,
      venue: "Mini Auditorium",
      organizers: [
        {
          name: "Kumaresh",
          phone: "+91 7358267748"
        },
        {
          name: "Janarth",
          phone: "+91 9384675973"
        },
        {
          name: "Raveesh",
          phone: "+91 9995985389"
        }
      ],
      form: "https://forms.gle/vVvYh6VEG4Yc3PHAA"
    }]
  },
  saaral: {
    clubs: [
      {
        name: "சாரல் தமிழ் மன்றம்",
        imgsrc: "saaral.png"
      },
      {
        name: "முடிவிலி",
        imgsrc: "mudivili.jpg"
      }
    ], events: [
      {
        eventNames: "சகலகலா வல்லவன்",
        description:
          "இன்றைய சூழலில் பேச வேண்டிய விஷயங்களை மேடையிட்டு பேசும் சாரலின்  பட்டிமன்றத்திற்கும், நான்கு போட்டிகளை உள்ளடக்கிய சகலகலா வல்லவன் போட்டிக்கும் அனைவரையும் வரவேற்கிறது சாரல் தமிழ் மன்றம். தலைவர் பட வசனங்களை மணப்பாடமாய் பேசிய நமக்கு, அதை பேச ஒரு வாய்ப்பு தருகிறது வசன கர்த்தா போட்டி. இளங்கோவடிகள் முதல் அனிருத் வரை நம்மை கட்டி போட்ட இசையில் உள்ள சில சொற்களின் பொருளை சொல்ல பொருளை தரும் போட்டி இசை தமிழ். வாயை மூடி பேசவும் போட்டியில் திருக்குறளை குரலை பயன் படுத்தாமல் நடித்தே கண்டு பிடிக்க வைக்க வேண்டும். கடைசி போட்டி தொடரி போட்டி, தொடரியை போல் வார்த்தைகளை எடுத்து அதை கதையாய் தொடுக்க வெற்றி நமதே. தொலைந்த கண்டத்தை தேடும் முயற்சியில் வாசகங்களை வைத்து சாகசம் செய்ய இந்த இன்ஸ்டிங்க்ட்ஸில் சாரல் தமிழ் மன்றத்தோடு இணைவீர்.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "TBD",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSc8MG70OJobMYHKBRIq-MZCbvr7AYjELrtZ0Me28LDkDEtufA/viewform?embedded=true"
      },
      {
        eventNames: "பட்டிமன்றம்",
        description:
          "தமிழர் சிந்தனை கலை வெளிப்பாட்டு வடிவங்களில் சிறப்பான ஒரு வடிவமே பட்டிமன்றம். முரண்பாடான பலநோக்கங்கள் உடைய கருத்துகளை விவரிக்கவும், விவாதிக்கவும் மேலும் பேச்சுத்திறனை வெளிப்படுத்தவும் ஒரு சிறந்த மேடையை சாரல் தமிழ் மன்றம் மாணவர்களுக்கு அளிக்கிறது. ",
        date: "TBD",
        time: undefined,
        team_size: "TBD",
        type: "Individual",
        rules: [{
          ruleHead: "தகுதிச்சுற்று:",
          rules: ["கொடுக்கப்பட்ட தலைப்பில் போட்டியாளர்கள் 5 நிமிடங்கள் பேச வேண்டும்.", "6 போட்டியாளர்கள் இறுதிச்சுற்றிற்கு தேர்ந்தெடுக்கப்படுவர்."]
        },
        {
          ruleHead: "இறுதிச்சுற்று:",
          rules: ["பிரதான அரங்கத்தில் இறுதிச்சுற்று நடைபெறும்.", "போட்டியாளர்கள் இரு அணிகளாக பிரிக்கப்பட்டு பட்டிமன்றம் நடைபெறும்.", "ஒவ்வொரு போட்டியாளருக்கும் பேசுவதற்கு 7 நிமிடங்கள் வழங்கப்படும்.", "சிறந்து பேசிய போட்டியார்களுக்கு பரிசுகள் வழங்கப்படும்."]
        }],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSfHT976qp53jV9DrKhYoqEbqARIXYothKl-bEeijGK7HBPY-g/viewform?embedded=true"
      },
    ]
  },
  qfac: {
    clubs: [
      {
        name: "Q Factorial - The SSN Quiz Club",
        imgsrc: "qfac.png"
      },
      {
        name: "Cognition - SNUC Quiz Club",
        imgsrc: "cognition.png"
      }
    ], events: [
      {
        eventNames: "Funda-Mavan",
        description:
          "General Quiz.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Lone Wolf/ Team",
        team_size: "1-3",
        organizers: [
          {
            name: "Eshwar Nevedh S.K",
            phone: "9361329530",
          },
          {
            name: "Arjun Mukesh",
            phone: "9500147579"
          }
        ],
        rules: [
          {
            rules: [
              "Maximum three in a team",
              "Will consist of a prelims and a finals.",
              "Lone Wolf Participation allowed"
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLScdwnqcKE_kwn3r8p5qj9xVTMtvc4bOsn8w6xtsy92vDl_s3A/viewform?embedded=true"
      },
      {
        eventNames: "MELA Quiz",
        description:
          "Quiz on Music , Entertainment, Literature and Arts.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Lone Wolf/ Team",
        team_size: "1-3",
        organizers: [
          {
            name: "Varsha",
            phone: "9499037154",
          },
          {
            name: "Deepak",
            phone: "6369075710"
          }
        ],
        rules: [
          {
            rules: [
              "Maximum three in a team",
              "Lone Wolf Participation allowed",
              "Prelims plus Final format, both happening offline."
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLScdwnqcKE_kwn3r8p5qj9xVTMtvc4bOsn8w6xtsy92vDl_s3A/viewform?embedded=true"
      },
      {
        eventNames: "Sports Quiz",
        description:
          "Quiz about all types of Sports ",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Lone Wolf/ Team",
        team_size: "1-3",
        organizers: [
          {
            name: "Eshwar Nevedh S.K",
            phone: "9361329530",
          },
          {
            name: "Deepak",
            phone: "6369075710"
          }
        ],
        rules: [
          {
            rules: [
              "Maximum three in a team",
              "Lone Wolf Participation allowed",
              "Will be conducted in a Prelims plus Finals format"
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLScdwnqcKE_kwn3r8p5qj9xVTMtvc4bOsn8w6xtsy92vDl_s3A/viewform?embedded=true"
      },
    ]
  },
  lop: {
    clubs: [
      {
        name: "Lights Out Please",
        imgsrc: "lop.png"
      },
      {
        name: "Atwas Theatre Club",
        imgsrc: "atwas.jpg"
      }
    ], events: [
      {
        eventNames: "Quills Out Please!",
        description:
          "Do you have worlds built out of clouds, imagination running wild? Here's your chance to pen down your dream stories! (or if you've already written and formulated the script, why wait?) We see that you have a story to tell, so we present the place for you. Register now for Quills out please, the scriptwriting competition hosted by Lights out please, the SSN Theatre club.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Individual",
        organizers: [
          {
            name: "Supraja Vaidhyanathan",
            phone: "9444856059",
          }
        ],
        rules: [
          {
            ruleHead: "Get maximal freedom to build your story from scratch (but stick to these minimal rules!)",
            rules: [
              "Scripts must be original, and unpublished elsewhere.",
              "Explicit content is not encouraged.",
              "Include a title, Log line, and Character sketches before the play!",
              "Font: TNR, size: 12, line spacing: 1, limit: 40 pages."
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeqKVRLY5YRPOTqHnvtcZvePv7nyd8Ca674EErgFQjDJiG0lg/viewform?embedded=true"
      },
      {
        eventNames: "Mono Acting",
        description:
          "Have you ever caught yourself giving a pretend Oscar acceptance speech with your shampoo bottle? Ever notice how you mimic your heroes in front of the mirror or how you instantly become depressed when a sad song comes on the car’s stereo? If you’ve done all this, here’s your chance to come up and do it on the stage! Sign up for the Mono Acting Competition hosted by Lights Out Please, the most celebrated and the only theatre club of SSN.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Individual",
        organizers: [
          {
            name: "Pavithra Manikandan",
            phone: "9677023007",
          }
        ],
        rules: [
          {
            rules: [
              "Please refrain from any kind of vulgarity throughout the monologue. ",
              "Kindly adhere to the time limit.",
              "Ensure that you use the space around you to the maximum. "
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeqKVRLY5YRPOTqHnvtcZvePv7nyd8Ca674EErgFQjDJiG0lg/viewform?embedded=true"
      },
      {
        eventNames: "Enigma",
        description:
          `It is only through mystery and madness that the soul is revealed--Thomas Moore
          Do you think you have a detective's brain, but an actor's heart? Well, we have the right opportunity for the Sherlock in you to play Shakespeare. 
          Mystery,madness and loads of DRAMA.
          Lights out please and All the worlds at its stage is elated to announce the second edition of  ENIGMA.`,
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Individual",
        organizers: [
          {
            name: "Pavithra Manikandan",
            phone: "9677023007",
          }
        ],
        rules: [
          {
            ruleHead: "Shhh! It's supposed to be a secret 🤫",
            rules: [
            ],
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeqKVRLY5YRPOTqHnvtcZvePv7nyd8Ca674EErgFQjDJiG0lg/viewform?embedded=true"
      },
    ]
  },
  arudhra: {
    clubs: [
      {
        name: "Arudhra - Classical Dance Team",
        imgsrc: "arudhra.png"
      },
      {
        name: "Ameya - Classical Dance Team",
        imgsrc: "ameya.jpg"
      }
    ], events: [
      {
        eventNames: "Lights. Camera. Thadhinginathom.",
        description:
          "Arudhra (SSN-CDT) and Ameya (SNU-CDT) is proud to announce our flagship event for Instincts 2023. This is a solo dance competition for all enthusiastic classical dancers across the country. Here is your platform to showcase your flair for classical dance. Join us here for an enriching journey. ",
        date: "March 10, 2023",
        time: "9AM - 11AM",
        venue: "Central Seminar Hall",
        type: "Individual",
        organizers: [
          {
            name: "Krishi Vijayanand",
            phone: "9941683848",
          },
          {
            name: "Divya Darshini P",
            phone: "8144244911",
          },
          {
            name: "Suraksha SP",
            phone: "8939642569",
          },
          {
            name: "Sriya A",
            phone: "8309240425",
          },
        ],
        rules: [
          {
            ruleHead: "PRELIMS:",
            rules: [
              "Theme: Convey a story with a little jathi.",
              "Total duration of your performance must not exceed 6 mins including stage setup (Minimum 3 mins)",
              "You can dance to any song of your choice.",
              "There are no restrictions in costumes.",
              "Bring the song in a pen drive on the day of competition and have a backup in your mobile, in case of emergency.",
              "Your performance will be judged based on the theme given.",
              "Judge’s decision will be final.",
            ],
          },
          {
            ruleHead: "FINALE:",
            rules: [
              "Theme: Depiction of any Indie-filmy song",
              "Total duration of your performance must not exceed 4 mins including stage setup.",
              "Your performance can be Classical, Semi-classical or Folk depending on the song you choose.",
              "Your performance must be a recreation of any Indie-filmy song or the depiction of the same.",
              "You will be judged based on: Costume, Creativity, Expression and Footwork.",
              "Judge’s decision will be final.",
            ],
          },
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSc6yRkmx4cqd0sh48j76UflZPCPmGafvlA2WO1P_MaXUhvYQw/viewform?embedded=true"
      },
    ]
  },
  n2k: {
    clubs: [
      {
        name: "SSN-N2K",
        imgsrc: "n2k.jpeg"
      },
      {
        name: "SNUC-RHYTHM",
        imgsrc: "n2k.jpeg"
      }
    ], events: [
      {
        eventNames: "WESTERN SOLO",
        description:
          "The Western Solo competition is set to be a dazzling display of skill, as participants showcase their talents with either a choreographed solo performance or a freestyle routine, with both options being limited to western dance styles. As you watch the competition, you'll see dancers moving to the beat with precision and energy. Each performer brings their own unique style and personality to the dance, creating a memorable and engaging performance.",
        date: "9th March 2023",
        time: "11:30AM - 2:30PM",
        venue: "SNU Lobby",
        type: "Individual",
        rules: [{
          rules: ["Time limit: 3 minutes.", "The registration fee is 100 per head.", "Usage of props is allowed.", "Obscenity and vulgarity will not be entertained.", "Folk themed performances are not allowed.", "Inflammable objects, water and heavy objects are not allowed on stage.", "Decisions of the judges and coordinators will be final and binding.", "The organizing committee reserves the right to modify the event at any point."]
        }],
        organizers: [
          {
            name: "Tushar Nair",
            phone: "75500 91499",
          },
          {
            name: "Neeshanth S.",
            phone: "93538 05104",
          },
          {
            name: "Anjana R",
            phone: "7824015392 ",
          }
        ],
      },
      {
        eventNames: "2v2 DANCE BATTLE",
        description:
          "Get your dance partner to duke it out with the best hip hop freestyle dancers in the city. Watch the crowd roar as you showcase your best moves in the cypher. The 2v2 Dance Battle promises to be a thrilling event, with dance partners going head-to-head against the best hip-hop freestyle dancers in the city. It will be an exciting opportunity for participants to show off their moves and compete for the top spot. The dance battle begins with a charged atmosphere, as the two teams of two dancers each stand opposite each other, facing off on the dance floor. The energy is palpable, as the dancers move to the beat of the music, waiting for their moment to shine. As the music starts, the dancers launch into action, moving with precision and grace. As the battle heats up, the dancers become more and more competitive, pushing themselves to the limit to outperform their opponents.",
        date: "9th March 2023",
        time: "2:00pm-4:00pm",
        venue: "Open Air Theatre",
        type: "Team",
        team_size: "2",
        rules: [{
          rules: ["Time limit: 60-120 seconds per team.", "Pairs will be pitted against each other at random.", "Team dynamics, cohesion of groove, creativity and audience response will be judged.", "The registration fee is 100 per head.", "Usage of props is allowed.", "Obscenity and vulgarity will not be entertained.", "Folk themed performances are not allowed.", "Inflammable objects, water and heavy objects are not allowed on stage.", "Decisions of the judges and coordinators will be final and binding.", "The organizing committee reserves the right to modify the event at any point."]
        }],
        organizers: [
          {
            name: "Tushar Nair",
            phone: "75500 91499",
          },
          {
            name: "Neeshanth S.",
            phone: "93538 05104",
          },
          {
            name: "Anjana R",
            phone: "7824015392 ",
          }
        ],
      },
      {
        eventNames: "CHOREONITE",
        description:
          `Experience the power of dance at Choreonite 2023, where the strongest college teams of the city compete to prove their worth.
          The Choreonite is a thrilling and exhilarating event that showcases the incredible talent and passion of the dancers who participate. It is a thrilling display of coordination, creativity, and skill. The atmosphere is charged with excitement as teams from different colleges and Universities gather to showcase their talent in a lively and energetic competition. As the teams take to the stage, they move in unison, their steps and movements perfectly choreographed to the rhythm of the music.
          The competition is fierce, with each team trying to outdo the others with their creativity, precision, and showmanship.`,
        date: "9th March 2023",
        time: "5:30pm-8:30pm",
        venue: "Open Air Theatre",
        type: "Team",
        team_size: "2",
        rules: [{
          ruleHead: "Round 1:",
          rules: [" Online video submission round.", "Teams are requested to send a link of a recently recorded video with all the participating members to ssnn2k@gmail.com by March 1st", "The mail must contain the college name, team name and contact details of two representatives", `Results will be announced by March 3rd.`]
        },
        {
          ruleHead: "Round 2",
          rules: ["Participants have to be currently studying in a recognized college and must produce a valid College ID card at the event venue.", "The tracks must be provided to the event coordinator at the time of registration in a pendrive."]
        },
        {
          ruleHead: "General",
          rules: ["Time limit: 10 minutes", "Number of participants: 8-25", "Routines must strictly adhere to western styles.", "Usage of props is allowed.", "Obscenity and vulgarity will not be entertained", "Inflammable objects, water and heavy objects are not allowed on stage.", "The registration fee is 200 per head.", "Decisions of the judges and coordinators will be final and binding.", "he Organizing Committee reserves the right to modify the event at any point."]
        }],
        organizers: [
          {
            name: "Tushar Nair",
            phone: "75500 91499",
          },
          {
            name: "Neeshanth S.",
            phone: "93538 05104",
          },
          {
            name: "Anjana R",
            phone: "7824015392 ",
          }
        ],
      },
    ]
  },
  talents: {
    clubs: [
      {
        name: "SSN English Literary Club",
        imgsrc: "elc.jpeg"
      },
      {
        name: "SNU English Literary Club",
        imgsrc: "elc.jpeg"
      }
    ], events: []
  },
  handila: {
    clubs: [
      {
        name: "Handila - Art Club",
        imgsrc: "handila.jpg"
      }
    ], events: [
      {
        eventNames: "Roaming paris",
        description:
          "It’s time to say bonjour to your inner fashion creator et create costumes along with your amis. Instincts is back in the game with ‘Roaming Paris’!! This exclusive costume designing event will surely tickle your artistic minds for the day. Each team consisting of 2-3 members will be instructed as to what supplies are needed to design their costume on the spot and will be given 2.5 hours to complete the dress. Supplies required for the costume will be provided by the organizers and additionally each team is also allowed to bring their own art supplies.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "2-3",
        organizers: [
          {
            name: "Srisailakhshmi R",
            phone: "9445916188",
          },
          {
            name: "A. Linda sheirly",
            phone: "7358219638",
          },
          {
            name: "Shreya R",
            phone: "9445799472",
          },
          {
            name: "Aneesha",
            phone: "9384029283",
          },
        ],
        ruleBook:
          "https://drive.google.com/open?id=1t3dqdydxZU5gO3J1qC-XECm0DT4MuCGQ",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScYKefZArO49W6I_G8u0e1lIUOSfV7F-jYsVLn79LXQabhZ5g/viewform?embedded=true"
      },
      {
        eventNames: "Soles on Fires",
        description:
          "A competition for witty creative artists.  If a quick draw and guess is your  major then hands down this event is for you and your team. Only the best minds will draw and conquer while the others will be stuck in their own drawn hurdles. We're back with another event - 'Soles on Fire'! With 3-4 members in a team, this event highlights the excitement of a relay. The 1st member receives a topic and they should draw as understandably as possible on a chart provided by us. The second member enters 15 minutes later, and continues to draw, in turn, trying to guess the topic. Each member continues to do the same until the members have completed their time limit. The total duration is 1.5 hours, and supplies must be brought by the participants. An important note here is that the 1st member cannot communicate with remaining members. The group needs to guess the topic as they continue to draw.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "4",
        organizers: [
          {
            name: "Srisailakhshmi R",
            phone: "9445916188",
          },
          {
            name: "Agilan M A",
            phone: "9790974144",
          },
          {
            name: "Suhash C",
            phone: "9566046423",
          },
          {
            name: "Adithan K",
            phone: "8939892155",
          },
        ],
        ruleBook:
          "https://drive.google.com/open?id=1QRIqj9-R4ak3ZWKQhdIiqYwqJ1Z4-1cN",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScg-Lh902r8azdWAy2tWTUQpxor2i-1YZQ4ApCNmct1Qf7Jyg/viewform?embedded=true"
      },
      {
        eventNames: "Draw with comali",
        description:
          "A picture can paint a thousand words but can you paint a picture with a few hindrances your way? inspired from the famous tv show Cook with comali here's an opportunity to showcase your talent on the canvas while facing a few hurdles and hindrances coming through. Will you and your partner overcome the challenges and still win? Join to find out.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "2-3",
        organizers: [
          {
            name: "Srisailakhshmi R",
            phone: "9445916188",
          },
          {
            name: "Anshita ",
            phone: "80150 80802",
          },
          {
            name: "Jagruti",
            phone: "9940027043",
          },
          {
            name: "Mugunthan",
            phone: "6379164202",
          },
        ],
        ruleBook:
          "https://drive.google.com/open?id=1gmUTY_HKOBb2evipfZLzRGqJEVp4zJ6E",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScjx8moGwfouu9qQilFRCdhYOXUeKmvQmtJW56r2qwLPvG6lw/viewform?embedded=true"
      },
      {
        eventNames: "What a look!",
        description:
          "Sheets and walls are too mainstream, showcase your painting skill on the face of your friend! What a look! Is a fun & creative face painting/makeup event that will for sure be an electrifying experience with 2-3 participants per team. The topic will be given on the spot with the total duration of 1.5 hours. It is expected that participants bring their own supplies.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "2",
        organizers: [
          {
            name: "Jagruti",
            phone: "9940027043",
          },
          {
            name: "Srisailakhshmi R",
            phone: "9445916188",
          },
          {
            name: "Fawaaz Ahmad F",
            phone: "9840218004",
          },
          {
            name: "Sanjay S ",
            phone: "7550124567",
          },
        ],
        ruleBook:
          "https://drive.google.com/open?id=1QjRiqcAc81wq1et3F0jbvhhjP_uogayQ",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScbhAFLBCSz00AAwiD4rgbZAPIN0mZ0zYkWiQ30Buq2tx25QQ/viewform?embedded=true"
      },
    ]
  },
  business: {
    clubs: [
      {
        name: "SNUC Business Club",
        imgsrc: "business.png"
      },
      {
        name: "Lakshya - EDC",
        imgsrc: "edc.png"
      }
    ], events: [
      {
        eventNames: "The SNUC IPL Auction",
        description:
          "A recreation of the massively entertaining IPL Auction - where teams are expected to bid for players and build a title-winning squad for their franchise.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "3-6",
        organizers: [
          {
            name: "Arjun K Swamy",
            phone: "9962385392",
          },
          {
            name: "Pranav RB",
            phone: "7338712142",
          },
          {
            name: "V Sreevathsan",
            phone: "7395973995",
          }
        ],
        form: "https://docs.google.com/forms/d/e/1FAIpQLSfmwcNcrrilOAWOiJokRPmyldzjDuopt8lloFO5uEM03EDjHQ/viewform?embedded=true"
      },
      {
        eventNames: "Udaan",
        description:
          "Udaan is a platform which puts one’s general interpretation skills to test. It features a mixture of exciting fun filled rounds, which infuses the perspective of entrepreneurship into generic real world based scenarios.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "4-5",
        organizers: [
          {
            name: "Pranav Aadhithya K.B",
            phone: "7338773979",
          },
          {
            name: "Dinesh S",
            phone: "9360597265",
          },
          {
            name: "Sowmya",
            phone: "7338796632",
          },
          {
            name: "Keshav Muralidhar",
            phone: "9884039394"
          }
        ],
        ruleBook: "https://drive.google.com/open?id=11D4UQm0RfqtYKQQHbNp2J18rYd2iX-ZZ",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSdXKe6NNFI5BWsmJSJXUEKQTWoZHxjQhdmcw4x3eeJuCE2p1A/viewform?embedded=true"
      },
    ]
  },
  edc: {
    clubs: [
      {
        name: "Lakshya - EDC",
        imgsrc: "edc.png"
      }
    ], events: [
      {
        eventNames: "Udaan",
        description:
          "Udaan is a platform which puts one’s general interpretation skills to test. It features a mixture of exciting fun filled rounds, which infuses the perspective of entrepreneurship into generic real world based scenarios.",
        date: "TBD",
        time: undefined,
        venue: "TBD",
        type: "Team",
        team_size: "4-5",
        organizers: [
          {
            name: "Pranav Aadhithya K.B",
            phone: "7338773979",
          },
          {
            name: "Dinesh S",
            phone: "9360597265",
          },
          {
            name: "Sowmya",
            phone: "7338796632",
          },
          {
            name: "Keshav Muralidhar",
            phone: "9884039394"
          }
        ],
        ruleBook: "https://drive.google.com/open?id=11D4UQm0RfqtYKQQHbNp2J18rYd2iX-ZZ"
      },
    ]
  }
};
