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
  featured?: boolean;
  type: 'house' | 'condo' | 'townhouse' | 'land';
}

const propertiesByType: {
  houses: Property[];
  condos: Property[];
  townhouses: Property[];
  land: Property[];
} = {
  houses: [
    {
      id: 1,
      title: "Suburban Family Home",
      description: "4 beds | 3 baths | 2,400 sqft",
      beds: 4,
      baths: 3,
      sqft: 2400,
      price: 525000,
      imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true,
      type: 'house'
    },
    {
      id: 2,
      title: "Spacious Ranch Style",
      description: "3 beds | 2 baths | 1,800 sqft",
      beds: 3,
      baths: 2,
      sqft: 1800,
      price: 325000,
      imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'house'
    },
    {
      id: 3,
      title: "Modern Farmhouse",
      description: "4 beds | 3.5 baths | 2,800 sqft",
      beds: 4,
      baths: 3.5,
      sqft: 2800,
      price: 625000,
      imageUrl: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'house'
    },
    {
      id: 4,
      title: "Historic Brownstone",
      description: "5 beds | 3.5 baths | 3,400 sqft",
      beds: 5,
      baths: 3.5,
      sqft: 3400,
      price: 875000,
      imageUrl: "https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'house'
    }
  ],
  condos: [
    {
      id: 5,
      title: "Modern Downtown Condo",
      description: "2 beds | 2 baths | 1,250 sqft",
      beds: 2,
      baths: 2,
      sqft: 1250,
      price: 375000,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true,
      type: 'condo'
    },
    {
      id: 6,
      title: "Downtown Loft Apartment",
      description: "1 bed | 1 bath | 750 sqft",
      beds: 1,
      baths: 1,
      sqft: 750,
      price: 195000,
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'condo'
    },
    {
      id: 7,
      title: "Beachfront Condo",
      description: "2 beds | 2 baths | 1,300 sqft",
      beds: 2,
      baths: 2,
      sqft: 1300,
      price: 725000,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'condo'
    }
  ],
  townhouses: [
    {
      id: 8,
      title: "Urban Townhouse",
      description: "3 beds | 2.5 baths | 1,600 sqft",
      beds: 3,
      baths: 2.5,
      sqft: 1600,
      price: 420000,
      imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'townhouse'
    },
    {
      id: 9,
      title: "Luxury Townhouse",
      description: "3 beds | 3.5 baths | 2,200 sqft",
      beds: 3,
      baths: 3.5,
      sqft: 2200,
      price: 585000,
      imageUrl: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'townhouse'
    }
  ],
  land: [
    {
      id: 10,
      title: "Lakeside Building Plot",
      description: "1.5 acre waterfront lot",
      beds: 0,
      baths: 0,
      sqft: 0,
      price: 175000,
      imageUrl: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'land'
    },
    {
      id: 11,
      title: "Suburban Development Land",
      description: "3.2 acre lot with utilities",
      beds: 0,
      baths: 0,
      sqft: 0,
      price: 320000,
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: 'land'
    }
  ]
};

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

  <div class="properties-page">
    <h1>Available Properties</h1>
    <p class="subtitle">Browse our selection of homes and properties by type</p>
    
    <!-- Houses Section -->
    <section class="property-type-section">
      <h2>Houses</h2>
      <div class="property-grid">
        <div 
          class="property-card" 
          v-for="property in propertiesByType.houses" 
          :key="property.id"
        >
          <div 
            class="property-img" 
            :style="{ backgroundImage: `url('${property.imageUrl}')` }"
          >
            <span v-if="property.featured" class="featured-badge">Featured</span>
          </div>
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <p>{{ property.description }}</p>
            <p class="price">{{ formatPrice(property.price) }}</p>
            <a href="#" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Condos Section -->
    <section class="property-type-section">
      <h2>Condos & Apartments</h2>
      <div class="property-grid">
        <div 
          class="property-card" 
          v-for="property in propertiesByType.condos" 
          :key="property.id"
        >
          <div 
            class="property-img" 
            :style="{ backgroundImage: `url('${property.imageUrl}')` }"
          >
            <span v-if="property.featured" class="featured-badge">Featured</span>
          </div>
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <p>{{ property.description }}</p>
            <p class="price">{{ formatPrice(property.price) }}</p>
            <a href="#" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Townhouses Section -->
    <section class="property-type-section">
      <h2>Townhouses</h2>
      <div class="property-grid">
        <div 
          class="property-card" 
          v-for="property in propertiesByType.townhouses" 
          :key="property.id"
        >
          <div 
            class="property-img" 
            :style="{ backgroundImage: `url('${property.imageUrl}')` }"
          >
            <span v-if="property.featured" class="featured-badge">Featured</span>
          </div>
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <p>{{ property.description }}</p>
            <p class="price">{{ formatPrice(property.price) }}</p>
            <a href="#" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Land Section -->
    <section class="property-type-section">
      <h2>Land & Lots</h2>
      <div class="property-grid">
        <div 
          class="property-card" 
          v-for="property in propertiesByType.land" 
          :key="property.id"
        >
          <div 
            class="property-img" 
            :style="{ backgroundImage: `url('${property.imageUrl}')` }"
          >
            <span v-if="property.featured" class="featured-badge">Featured</span>
          </div>
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <p>{{ property.description }}</p>
            <p class="price">{{ formatPrice(property.price) }}</p>
            <a href="#" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style scoped>
.properties-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.properties-page h1 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 40px;
  font-size: 18px;
}

.property-type-section {
  margin-bottom: 50px;
}

.property-type-section h2 {
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
}

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
  transition: transform 0.3s;
}

.property-card:hover {
  transform: translateY(-5px);
}

.property-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.featured-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
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

.btn {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
  font-size: 14px;
  text-align: center;
}

.btn:hover {
  background: #2980b9;
}

@media (max-width: 768px) {
  .property-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .property-grid {
    grid-template-columns: 1fr;
  }
  
  .properties-page {
    padding: 20px 15px;
  }
  
  .properties-page h1 {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 16px;
  }
  
  .property-type-section h2 {
    font-size: 22px;
  }
}
</style>