<!-- The featured listing prices will be consistently updated with whatever realtor wants to be seen.
     Just copy and paste entire listing from listing sheet to whichever property is being replaced -->
     <script setup lang="ts">
     import Nav from './Nav.vue';
     import Footer from './Footer.vue';

     interface Property {
       id: number;
       title: string;
       description: string;
       beds: number;
       baths: number;
       sqft: number;
       price: number;
       imageUrl: string;
     }
     
     const featuredProperties: Property[] = [
       {
         id: 1,
         title: "Modern Downtown Condo",
         description: "2 beds | 2 baths | 1,250 sqft",
         beds: 2,
         baths: 2,
         sqft: 1250,
         price: 375000,
         imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
       },
       {
         id: 2,
         title: "Suburban Family Home",
         description: "4 beds | 3 baths | 2,400 sqft",
         beds: 4,
         baths: 3,
         sqft: 2400,
         price: 525000,
         imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
       },
       {
         id: 3,
         title: "Luxury Waterfront",
         description: "3 beds | 2.5 baths | 3,100 sqft",
         beds: 3,
         baths: 2.5,
         sqft: 3100,
         price: 850000,
         imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
       }
     ];
     
     const formatPrice = (price: number): string => {
       return new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
         maximumFractionDigits: 0
       }).format(price);
     };
     </script>
     
     <template>
        <Nav />

        <!-- MAIN CONTENT MARKUP -->
        <div class="page-wrapper">
          <main>
            <!-- Hero Section -->
            <section class="hero" id="home">
              <h1>Find Your Dream Home</h1>
              <p>Professional real estate services tailored to your needs in the local area</p>
              <a href="#contact" class="btn">Contact Me Today</a>
            </section>
      
            <!-- Featured Properties -->
            <section id="properties">
              <h2>Featured Properties</h2>
              <div class="property-grid">
                <div 
                  class="property-card" 
                  v-for="property in featuredProperties" 
                  :key="property.id"
                >
                  <div 
                    class="property-img" 
                    :style="{ backgroundImage: `url('${property.imageUrl}')` }"
                  ></div>
                  <div class="property-info">
                    <h3>{{ property.title }}</h3>
                    <p>{{ property.description }}</p>
                    <p class="price">{{ formatPrice(property.price) }}</p>
                    <a href="#" class="btn">View Details</a>
                  </div>
                </div>
              </div>
            </section>
      
            <!-- About Section -->
            <section id="about">
              <h2>About Yonna</h2>
              <p>With over 5 years of experience in the local real estate market, I'm dedicated to helping you find the perfect property or get the best value for your current home.</p>
              <p>My approach focuses on understanding your unique needs and guiding you through every step of the buying or selling process with professionalism and care.</p>
              <a href="#contact" class="btn">Learn More</a>
            </section>
      
            <!-- Contact Section -->
            <section id="contact">
              <h2>Contact Me</h2>
              <p>Ready to start your home search? Have questions about selling your property?</p>
              <p>Email: yonna@realestate.com | Phone: (555) 123-4567</p>
              <a href="mailto:yonna@realestate.com" class="btn">Email Now</a>
            </section>
          </main>
        </div>
      
        <Footer />
      </template>

<style scoped>
/* ===== RESET & BASE STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* ===== MAIN LAYOUT STYLES ===== */
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Main Content Styles */
main {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}


.hero {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
              url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 30px;
}

/* Button Styles */
.btn {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #2980b9;
}

/* Section Styles */
section {
  margin-bottom: 40px;
}

section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
  color: #2c3e50;
}

/* Property Cards */
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.property-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.property-img {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.property-info {
  padding: 20px;
}

.property-info h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.property-info p {
  margin-bottom: 15px;
  color: #7f8c8d;
}

.price {
  font-weight: bold;
  color: #3498db;
  font-size: 20px;
}

@media (max-width: 480px) {
  .property-grid {
    grid-template-columns: 1fr;
  }
  
  .hero {
    padding: 30px 15px;
  }
  
  .hero h1 {
    font-size: 28px;
  }
  
  .hero p {
    font-size: 16px;
  }
  
  main {
    padding: 20px;
  }
}
</style>
