document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const modalContainer = document.querySelector('.modal-container');
    const modalImage = document.querySelector('.modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    const modalBio = document.querySelector('.modal-bio');
    const modalBioTitle = document.querySelector('.modal-bio-title');
    const closeModal = document.querySelector('.close');

    gridItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            if(window.innerWidth < 950){
                return;
            }

            const imgSrc = item.querySelector('img').getAttribute('src');
            const caption = item.querySelector('.caption').textContent;
            const bios = [
                "Chutong Zhang has served for four years as a leader and performer with the EchoWellness concert team, helping to organize and shape concert programs that bring together talented musicians for meaningful community events. As a recognized state-level soloist, he combines artistic excellence with strong leadership skills, ensuring each performance is both impactful and inspiring.",
                "Kassia is a rising senior at Memorial High School in Houston, TX. She has served on the EchoWellness board for three years in the Marketing department. Her favorite hobbies are painting, reading, listening to music, and playing volleyball.",
                "Tom Wang is a rising senior at The Woodlands High School in Spring, TX. He has helped in the Fundraising department for 2 years. His favorite hobbies are video editing, video games and commentary.",
                "Chloe Lu is a sophomore at James E. Taylor High School. She is interested in humanitarian subjects, languages, and the arts. Aside from academics, she loves to spend her time reading, painting, and finding new ways to contribute positively to her community through volunteering services.",
                "Emma is a rising senior at Choate Rosemary Hall in CT. She has been part of Echowellness for the past two years in the Marketing department and backstage crew.  Out of school, she loves running, baking, and playing water polo.",
                "Vivian Qin is from The Woodlands, Texas. She's been at EchoWellness for 3 years and has worked in its Marketing department. She hopes to use her experience in Fundraising this year. Vivian enjoys watching Formula 1, listening to RB music, and sleeping.",
                "Alice Hu is an incoming junior at Memorial High School who cares deeply about both business and giving back to her community. Her interest in using practical skills for a greater purpose led her to join EchoWellness, where she hopes to make a lasting impact. In her free time, she enjoys singing, writing songs, and drawing",
                "Jerry Gu is a Senior at the Princeton International School of Mathematics and Science and has been with EchoWellness for two years now. He enjoys playing tennis, researching, and contemplating ethics and philosophy. Driven by the vision of a world with less poverty, Jerry strives to create a more equitable community where everyone is better off, ultimately leading him to EchoWellness.",
                "Elizabeth is a sophomore at Glenda Dawson High School and is this year’s Echowellness secretary. She aims to bring students together in a team and get the best out of everybody, whether it’s through managing meetings or running volunteer events. She has a strong passion for science and music. In her free time, she enjoys building Legos and watching kids’ shows."
            ];
            const bio = bios[index];

            modalImage.src = imgSrc;
            modalBio.textContent = bio;
            modalBioTitle.textContent = caption;
            modalContainer.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
