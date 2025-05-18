// Data Destinasi Wisata
const destinations = [
            {
                id: 1,
                title: "Pantai Kuta, Bali",
                location: "Kuta, Bali, Indonesia",
                description: "Pantai Kuta adalah salah satu pantai paling populer di Bali dengan pasir putih dan ombak yang cocok untuk berselancar. Pantai ini menawarkan pemandangan matahari terbenam yang spektakuler dan berbagai aktivitas air yang menyenangkan.",
                rating: "4.8/5",
                duration: "3 Hari 2 Malam",
                group: "2-10 Orang",
                availability: "Setiap Hari",
                price: "Rp 2.500.000",
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "beach"
            },
            {
                id: 2,
                title: "Raja Ampat, Papua",
                location: "Raja Ampat, Papua Barat, Indonesia",
                description: "Kepulauan Raja Ampat terkenal dengan keindahan bawah lautnya yang memukau. Destinasi ini merupakan surga bagi penyelam dengan keanekaragaman hayati laut yang sangat tinggi dan pemandangan alam yang masih alami.",
                rating: "5/5",
                duration: "5 Hari 4 Malam",
                group: "2-8 Orang",
                availability: "Musim Kemarau",
                price: "Rp 8.000.000",
                image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "island"
            },
            {
                id: 3,
                title: "Gunung Bromo, Jawa Timur",
                location: "Taman Nasional Bromo Tengger Semeru, Jawa Timur",
                description: "Gunung Bromo menawarkan pemandangan sunrise yang legendaris di antara lautan pasir dan kawah yang masih aktif. Pengalaman menunggang kuda melintasi lautan pasir menjadi daya tarik utama destinasi ini.",
                rating: "4.7/5",
                duration: "2 Hari 1 Malam",
                group: "2-15 Orang",
                availability: "April-November",
                price: "Rp 1.800.000",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "mountain"
            },
            {
                id: 4,
                title: "Labuan Bajo, NTT",
                location: "Labuan Bajo, Flores, Nusa Tenggara Timur",
                description: "Labuan Bajo adalah gerbang menuju Taman Nasional Komodo dan Pulau Padar yang terkenal. Selain melihat komodo, Anda bisa menikmati pantai-pantai eksotis dan snorkeling di spot terbaik Indonesia.",
                rating: "4.9/5",
                duration: "4 Hari 3 Malam",
                group: "2-12 Orang",
                availability: "April-Oktober",
                price: "Rp 5.500.000",
                image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "adventure"
            },
            {
                id: 5,
                title: "Candi Borobudur, Jawa Tengah",
                location: "Magelang, Jawa Tengah, Indonesia",
                description: "Candi Borobudur adalah warisan dunia UNESCO dan candi Buddha terbesar di dunia. Menyaksikan sunrise dari puncak candi dengan latar Gunung Merapi dan Merbabu adalah pengalaman tak terlupakan.",
                rating: "4.6/5",
                duration: "1 Hari",
                group: "2-20 Orang",
                availability: "Setiap Hari",
                price: "Rp 750.000",
                image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "culture"
            },
            {
                id: 6,
                title: "Pulau Komodo, NTT",
                location: "Pulau Komodo, Nusa Tenggara Timur",
                description: "Pulau Komodo adalah habitat asli komodo, kadal terbesar di dunia. Selain melihat komodo, Anda bisa menikmati Pink Beach dengan pasirnya yang berwarna merah muda dan snorkeling di perairan jernih.",
                rating: "4.9/5",
                duration: "3 Hari 2 Malam",
                group: "2-10 Orang",
                availability: "April-Oktober",
                price: "Rp 4.200.000",
                image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                type: "adventure"
            }
        ];

        // DOM Elements
        const destinationsGrid = document.getElementById('destinations-grid');
        const destinationModal = document.getElementById('destination-modal');
        const closeModalBtn = document.getElementById('close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalLocation = document.getElementById('modal-location');
        const modalDescription = document.getElementById('modal-description');
        const modalRating = document.getElementById('modal-rating');
        const modalDuration = document.getElementById('modal-duration');
        const modalGroup = document.getElementById('modal-group');
        const modalAvailability = document.getElementById('modal-availability');
        const modalPrice = document.getElementById('modal-price');
        const modalImg = document.getElementById('modal-img');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const searchInput = document.querySelector('.search-box input');
        const searchBtn = document.querySelector('.search-box button');

        // Display Destinations
        function displayDestinations(dests) {
            destinationsGrid.innerHTML = '';
            
            dests.forEach(destination => {
                const card = document.createElement('div');
                card.className = 'destination-card';
                card.innerHTML = `
                    <img src="${destination.image}" alt="${destination.title}" class="destination-img">
                    <div class="destination-info">
                        <h3 class="destination-title">${destination.title}</h3>
                        <p class="destination-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${destination.location}
                        </p>
                        <p class="destination-description">${destination.description.substring(0, 100)}...</p>
                        <div class="destination-rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span>${destination.rating}</span>
                        </div>
                        <p class="destination-price">Mulai dari ${destination.price}</p>
                        <button class="btn" data-id="${destination.id}">Detail</button>
                    </div>
                `;
                destinationsGrid.appendChild(card);
            });
            
            // Add event listeners to detail buttons
            document.querySelectorAll('.destination-card .btn').forEach(btn => {
                btn.addEventListener('click', openDestinationModal);
            });
        }

        // Open Destination Modal
        function openDestinationModal(e) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const destination = destinations.find(dest => dest.id === id);
            
            modalTitle.textContent = destination.title;
            modalLocation.textContent = destination.location;
            modalDescription.textContent = destination.description;
            modalRating.textContent = destination.rating;
            modalDuration.textContent = destination.duration;
            modalGroup.textContent = destination.group;
            modalAvailability.textContent = destination.availability;
            modalPrice.textContent = destination.price;
            modalImg.src = destination.image;
            modalImg.alt = destination.title;
            
            destinationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Close Modal
        function closeModal() {
            destinationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Testimonial Slider
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            testimonialDots[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Add click event to dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });

        // Search Functionality
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase();
            
            if (searchTerm) {
                const filtered = destinations.filter(dest => 
                    dest.title.toLowerCase().includes(searchTerm) || 
                    dest.location.toLowerCase().includes(searchTerm) ||
                    dest.description.toLowerCase().includes(searchTerm)
                );
                
                displayDestinations(filtered);
            } else {
                displayDestinations(destinations);
            }
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === destinationModal) {
                closeModal();
            }
        });

        // Close modal with button
        closeModalBtn.addEventListener('click', closeModal);

        // Newsletter Form
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            alert(`Terima kasih telah berlangganan dengan email ${email}!`);
            newsletterForm.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize the page
        function init() {
            displayDestinations(destinations);
            showSlide(0);
        }

        // Run when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
