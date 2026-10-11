
document.addEventListener("DOMContentLoaded", () => {


    /* Gurdwara Information */

    const gurdwaras = {

        hemkundSahib: {
            name: "Gurdwara Hemkund Sahib",
            location: "Chamoli, Uttarakhand, India",
            image: "images/hemkund-sahib.jpg",
            description:
                "Gurdwara Sri Hemkund Sahib, located in the Chamoli district of Uttarakhand, India, is the highest altitude Gurdwara in the world, sitting at an elevation of approximately 4,632 meters (15,197 feet) above sea level. Ringed by seven majestic, snow-capped peaks and set beside a pristine glacial lake, this sacred shrine marks the spot where the tenth Sikh Guru, Guru Gobind Singh Ji, spent a previous life engaging in deep meditation and divine devotion (as recounted in his autobiographical work, Bachittar Natak). Rediscovered in the early 20th century by Sikh scholars inspired by the Guru’s writings, Hemkund Sahib today stands as a profoundly revered pilgrimage destination where thousands of devotees undertake a challenging mountain trek each summer to seek spiritual solace amidst the Himalayas.",
            year: "1933-1934",
            founder: "Sant Sohan Singh Ji",
            place: "Chamoli, Uttarakhand, India"
        },


        goldenTemple: {
            name: "Gurdwara Sri Harmandir Sahib",
            location: "Amritsar, Punjab, India",
            image: "images/golden-temple.jpg",
            description:
                "The Golden Temple (Sri Harmandir Sahib) is the holiest temple and spiritual center of Sikhism, located in Amritsar, Punjab, India. Founded in the late 16th century by Guru Ram Das and completed under Guru Arjan Dev Ji, the gurdwara complex sits in the middle of a sacred pool called the Amrit Sarovar. With four entrances symbolizing openness to all people regardless of background. The complex also has the Akal Takht (Highest seat of Sikh Authority) and a large community kitchen, or langar, which serves free vegetarian meals to over 100,000 visitors everyday.",
            year: "1577",
            founder: "Guru Ram Das Ji & Guru Arjan Dev Ji",
            place: "Amritsar, Punjab, India"
        },


        kesgarhSahib: {
            name: "Takht Kesgarh Sahib",
            location: "Anandpur Sahib, Punjab, India",
            image: "images/kesgarh-sahib.jpg",
            description:
                "Takht Sri Kesgarh Sahib is one of the five Takhts in Sikhism. Originally built as a defensive fort by Guru Gobind Singh Ji, this shrine stands on the site where the Khalsa Panth was created on the day of Vaisakhi in 1699, It was here that the Tenth Guru baptized the Panj Pyare with Amrit (Holy Nectar). Today the white complex serves as a global pilgrimage hub, most famous for hosting the massive martial arts festival called Hola Mohalla. It also preserves a sacred inner place that displays rare, historical weapons (Shasters) used by Guru Gobind Singh Ji and his legendary warriors, making its status as an enduring symbol of spirtual devotion.",
            year: "1699",
            founder: "Guru Gobind Singh Ji",
            place: "Anandpur Sahib, Punjab, India"
        },


        dukhNiwaranSahib: {
            name: "Gurdwara Dukh Niwaran Sahib",
            location: "Patiala, Punjab, India",
            image: "images/dukh-niwaran-sahib.jpg",
            description:
                "In Patiala Punjab, this Gurdwara is blessed by a visit by Guru Tegh Bahadur Ji, the ninth Sikh Guru, who camped here under a tree next to a local pond to cure the villagers from a mysterious, deadly plague. The spot was named Dukh Niwaran, which translates to the 'dispeller of suffering'. Today, thousands of pilgrims visit the gurdwara to pray and submerge themselves in the Sarovar (Holy Tank), firmly believing in its divine healing powers.",
            year: "1942",
            founder: "Guru Tegh Bahadur Ji",
            place: "Patiala, Punjab, India"
        },


        damdamaSahib: {
            name: "Takht Sri Damdama Sahib",
            location: "Talwandi Sabo, Punjab, India",
            image: "images/damdama-sahib.jpg",
            description:
                "Takht Sri Damdama Sahib is one of the five supreme seats of authority (Takhts) in Sikhism. The tenth Guru established this site as a safe place to rest aftering fighting mounmental battels at Anandpur Sahib, Chamkaur Sahib, and Muktsar. Affectionately known as Guru Ki Kashi (the seat of Sikh Learning), Guru Gobind Singh Ji transformed this location into a literary hub where he compiled the full, final version of Sri Guru Granth Sahib, appointing Baba Deep Singh Ji as the very first Jathedar.",
            year: "1705",
            founder: "Guru Gobind Singh Ji",
            place: "Talwandi Sabo, Punjab, India"
        },


        panjaSahib: {
            name: "Gurdwara Panja Sahib",
            location: "Hasan Abdal, Pakistan",
            image: "images/panja-sahib.jpg",
            description:
                "This magnificant shrine marks a historic stop by the founder of Sikhism, Guru Nanak Dev Ji. According to history, a saint hurdled a boulder down a hill to cursh the Guru, who effortlessly stopped the rock with his bare open hand. The stone still bears a deeply embedded handprint (Panja), attracting thousands of international pilgrims to witness the miracle site.",
            year: "19th Century (Miracle took place around 1521)",
            founder: "Guru Nanak Dev Ji (Miracle associated with him)",
            place: "Hasan Abdal, Pakistan"
        },


        kartarpur: {
            name: "Gurdwara Darbar Sahib Kartarpur",
            location: "Kartarpur, Pakistan",
            image: "images/kartarpur.jpg",
            description:
                "Positioned on the banks of the Ravi River in Narowal, Pakistan, Kartarpur stands as the very first Gurdwara ever established in human history. Founded by Guru Nanak Dev Ji, this is where the core foundational pillars of the Sikh lifestyle, Naam Japna (meditation), Kirat Karni (honest labor), and Vand Chakna (sharing food via the first community Langar kitchen). The magnificent white complex marks the exact sacred ground where the First Guru spent the final 18 years of his life and departed his physical form in 1539, functioning today as a historic bridge of peace.",
            year: "1504",
            founder: "Guru Nanak Dev Ji",
            place: "Kartarpur, Pakistan"
        },


        nankanaSahib: {
            name: "Gurdwara Nankana Sahib",
            location: "Nankana Sahib, Pakistan",
            image: "images/nankana-sahib.jpg",
            description:
                "Located in the Punjab province of Pakistan, this is considered the holiest geographic site in Sikhism as it marks the exact birthplace of Guru Nanak Dev Ji in 1469. Beyond its association with the birth of the faith, the historic compound remains a symbol of resilience; it was the site of the tragic 1921 Nankana Massacre, a watershed event in the Gurdwara Reform Movement that ultimately restored the administration of historical shrines back to the Sikh community. Gurdwara Nankana Sahib is a major Sikh historical site associated with the life of Guru Nanak Dev Ji.",
            year: "1600",
            founder: "Baba Dharam Chand (Associated with Guru Nanak Dev Ji)",
            place: "Nankana Sahib, Pakistan"
        },


        banglaSahib: {
            name: "Gurdwara Bangla Sahib",
            location: "New Delhi, India",
            image: "images/bangla-sahib.jpg",
            description:
                "A golden-domed landmark situated in the heart of New Delhi, this site originally housed a grand 17th-century palace bungalow owned by Raja Jai Singh I. In 1664, the child-guru Guru Har Krishan Ji resided here as a guest and selflessly tended to the local population during a catastrophic smallpox and cholera epidemic, pouring holy water from the palace well to cure the afflicted before tragically succumbing to the illness himself. Sardar Baghel Singh constructed the first formal Sikh shrine here after leading the Khalsa army into Delhi, and today it is celebrated globally for its vast healing pool and relentless, 24/7 humanitarian kitchen.",
            year: "1783",
            founder: "Sardar Baghel Singh (Associated with Guru Har Krishan Ji)",
            place: "New Delhi, India"
        },


        hazurSahib: {
            name: "Takht Sachkhand Sri Hazur Sahib",
            location: "Nanded, Maharashtra, India",
            image: "images/hazur-sahib.jpg",
            description:
                "Situated beautifully along the banks of the Godavari River in Nanded, Maharashtra, this serves as one of Sikhism's five absolute seats of temporal authority. This deeply sacred shrine marks the exact location where the tenth Guru, Guru Gobind Singh Ji, established his final camp, departed his physical form, and ascended to the eternal light in 1708. It holds unmatched theological importance because it was here that the Tenth Guru brought the lineage of living human Gurus to a close and eternal spiritual sovereignty upon the Sri Guru Granth Sahib.",
            year: "1832-1837",
            founder: "Maharaja Ranjit Singh (Enclosing the final camp of Guru Gobind Singh Ji).",
            place: "Nanded, Maharashtra, India"
        },


        sisGanjSahib: {
            name: "Gurdwara Sis Ganj Sahib",
            location: "Chandni Chowk, Delhi, India",
            image: "images/sis-ganj-sahib.jpg",
            description:
                "Anchored in the vibrant Chandni Chowk district of Old Delhi, this shrine stands as an eternal monument to supreme sacrifice and freedom of conscience. It marks the exact historical location where the ninth Sikh Guru, Guru Tegh Bahadur Ji, was beheaded on November 11, 1675, under the strict orders of Mughal Emperor Aurangzeb for refusing to renounce his faith and for defending the human rights of Kashmiri Hindus. The complex still carefully preserves the historical well from which the Guru drank and the trunk of the tree beneath which he achieved martyrdom.urdwara Sis Ganj Sahib is a historic Sikh shrine located in Chandni Chowk, Delhi.",
            year: "1783",
            founder: "Associated with Guru Tegh Bahadur Ji",
            place: "Delhi, India"
        },


        patnaSahib: {
            name: "Takhat Shri Harimandir Ji Patna Sahib",
            location: "Patna, Bihar, India",
            image: "images/patna-sahib.jpg",
            description:
                "Located in the ancient city of Patna, Bihar, this grand white marble Takht is honored globally as one of the five principal seats of Sikh authority. It commemorates the exact ground where Guru Gobind Singh Ji was born on December 22, 1666, and spent his formative childhood years. The magnificent complex features exquisite gold inlay work and functions today as a vast pilgrimage center, preserving precious personal relics of the Tenth Guru, including his childhood sandals, weapons, and a rare handwritten scriptural text.",
            year: "Early 19th Century (Marking the historical birthplace from 1666).",
            founder: "Maharaja Ranjit Singh (Marking the birthplace of Guru Gobind Singh Ji).",
            place: "Patna, Bihar, India"
        },


        singhShaheedan: {
            name: "Gurdwara Singh Shaheedan",
            location: "Sohana, Punjab, India",
            image: "images/singh-shaheedan.jpg",
            description:
                "Located in Sohana near Mohali, Punjab, this deeply revered shrine is built to honor the legendary valor and supreme martyrdom of Sikh warriors. It marks the exact ground where Baba Hanuman Singh Ji—the illustrious 90-year-old Jathedar of the Akal Takht—and over 500 of his Nihang soldiers succumbed to wounds sustained from heavy British cannon fire during the brutal Anglo-Sikh wars. The memorial shrine remains heavily visited for its spiritual power, hosting massive weekly congregations where the historic wooden shoes (khadaus) of the martyrs are preserved for public viewing.",
            year: "Mid-19th Century",
            founder: "Baba Harbans Singh Ji",
            place: "Sohana, Punjab, India"
        },


        fatehgarhSahib: {
            name: "Gurdwara Sri Fatehgarh Sahib",
            location: "Fatehgarh Sahib, Punjab, India",
            image: "images/fatehgarh-sahib.jpg",
            description:
                "Situated in the historic city of Fatehgarh Sahib, Punjab, this moving shrine immortalizes the unmatched courage of the two youngest sons of Guru Gobind Singh Ji: Sahibzada Zorawar Singh Ji (aged 9) and Sahibzada Fateh Singh Ji (aged 7). In December 1705, these young children refused to convert under state execution threats, choosing instead to be bricked alive inside a cold wall. Following the conquest of Sirhind in 1710, the great Sikh general Banda Singh Bahadur took over the tyrannical fort and founded the initial memorial layout, naming the site Fatehgarh (Fort of Victory) in honor of the young princes.",
            year: "1710",
            founder: ":Baba Banda Singh Bahadur",
            place: "Fatehgarh Sahib, Punjab, India"
        },


        jyotiSaroopSahib: {
            name: "Gurudwara Sri Jyoti Saroop Sahib",
            location: "Fatehgarh Sahib, Punjab, India",
            image: "images/jyoti-saroop-sahib.jpg",
            description:
                "Located about a mile from Gurdwara Fatehgarh Sahib in Sirhind, Punjab, this solemn monument marks the exact location where the mortal remains of the two youngest martyred princes and their grandmother, Mata Gujri Ji, were cremated in 1705. Following their execution, tyrannical Mughal authorities refused to grant land for their funeral unless the ground was completely covered in gold coins; a wealthy merchant named Seth Todar Mal stepped forward and purchased the plot by layering it entirely with gold coins. The modern, multi-storied white dome structure was heavily developed in 1952 to safeguard this final resting place of the holy family.",
            year: "1952 (The initial land purchase and cremation took place in December 1705).",
            founder: "Maharaja Yadavindra Singh of Patiala (The original land was purchased by Seth Todar Mal).",
            place: "Fatehgarh Sahib, Punjab, India"
        },


        katalgarhSahib: {
            name: "Gurudwara Sri Katalgarh Sahib Ji",
            location: "Chamkaur Sahib, Punjab, India",
            image: "images/katalgarh-sahib.jpg",
            description:
                " Prominently located in Chamkaur Sahib, Punjab, this shrine marks the epic battlefield where just 40 Sikh warriors, led by Guru Gobind Singh Ji, defended a mud fortress against an overwhelming Mughal imperial army numbering in the tens of thousands. This specific shrine marks the exact bloodiest ground where the Guru’s two eldest teenage sons, Sahibzada Ajit Singh Ji and Sahibzada Jujhar Singh Ji, alongside three of the original Panj Pyaras, validly charged into the battlefield and achieved glorious martyrdom. Following the battle, a brave Sikh woman named Bibi Sharan Kaur defied imperial bans to collect and cremate the bodies of the fallen princes, founding the legacy of this timeless pilgrimage site.",
            year: "Early 18th Century (Directly following the battle of December 1704).",
            founder: "Bibi Sharan Kaur (Associated with the cremation of the martyred ones and the founding of the shrine).",
            place: "Chamkaur Sahib, Punjab, India"
        }

    };

    const markers =
        document.querySelectorAll(".map-marker");


    const featuredCards =
        document.querySelectorAll(".featured-card");


    const panelImage =
        document.getElementById("panel-image");


    const panelName =
        document.getElementById("panel-name");


    const panelLocation =
        document.getElementById("panel-location");


    const panelDescription =
        document.getElementById("panel-description");


    const panelYear =
        document.getElementById("panel-year");


    const panelFounder =
        document.getElementById("panel-founder");


    const panelPlace =
        document.getElementById("panel-place");


    const startExploring =
        document.getElementById("startExploring");


    const learnMoreButton =
        document.getElementById("learnMoreButton");


    const mapSection =
        document.getElementById("map");

    function updatePanel(gurdwaraID) {

        const data =
            gurdwaras[gurdwaraID];

    
        /* If the ID doesn't exist, stop the function. */

        if (!data) {

            console.error(
                "Gurdwara not found:",
                gurdwaraID
            );

            return;
        }

        /* Update image */

        panelImage.src =
            data.image;

        panelImage.alt =
            data.name;

        /* Update name */

        panelName.textContent =
            data.name;

        /* Update location */

        panelLocation.textContent =
            data.location;

        /* Update description */

        panelDescription.textContent =
            data.description;

        /* Update historical period */

        panelYear.textContent =
            data.year;


        /* Update associated person */

        panelFounder.textContent =
            data.founder;


        /* Update location */

        panelPlace.textContent =
            data.place;


        /* Remove selected class from every marker */

        markers.forEach(marker => {

            marker.classList.remove("selected");

        });


        /* Find selected marker */

        const selectedMarker =
            document.querySelector(
                `[data-gurdwara="${gurdwaraID}"]`
            );


        /* Highlight selected marker */

        if (selectedMarker) {

            selectedMarker.classList.add("selected");

        }

    }

    markers.forEach(marker => {

        marker.addEventListener("click", () => {

            const selectedGurdwara =
                marker.dataset.gurdwara;


            updatePanel(
                selectedGurdwara
            );

        });

    });

    featuredCards.forEach(card => {

        card.addEventListener("click", () => {

            const selectedGurdwara =
                card.dataset.gurdwara;


            updatePanel(
                selectedGurdwara
            );


            /* Scroll back to the map */

            mapSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });

    startExploring.addEventListener(
        "click",
        () => {

            mapSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

    const images =
        document.querySelectorAll("img");


    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                /* Don't repeatedly try to replace the same image. */

                if (
                    image.dataset.failed === "true"
                ) {
                    return;
                }


                image.dataset.failed = "true";


                /* Create a simple SVG placeholder. */

                const placeholder =
                    `
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="600"
                        height="400"
                        viewBox="0 0 600 400">

                        <rect
                            width="600"
                            height="400"
                            fill="#10263d"/>

                        <text
                            x="50%"
                            y="50%"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            fill="#f5a623"
                            font-family="Georgia"
                            font-size="28">
                            VIRASAT
                        </text>

                    </svg>
                    `;


                image.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(
                        placeholder
                    );

            }
        );

    });

    updatePanel("GoldenTemple");

});