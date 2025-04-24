
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Car, TrendingUp, Settings } from 'lucide-react';

// Vehicle data
const vehicles = [
  {
    id: 'stellar-ev',
    name: 'Stellar EV',
    type: 'Electric',
    price: 'From $59,900',
    range: '350 mi',
    acceleration: '3.2s',
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    colors: ['bg-black', 'bg-white', 'bg-car', 'bg-red-500', 'bg-gray-500'],
    featured: true
  },
  {
    id: 'cosmic-suv',
    name: 'Cosmic SUV',
    type: 'Electric',
    price: 'From $69,900',
    range: '300 mi',
    acceleration: '3.8s',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    colors: ['bg-black', 'bg-white', 'bg-car-dark', 'bg-gray-700'],
    featured: true
  },
  {
    id: 'aurora-sedan',
    name: 'Aurora Sedan',
    type: 'Hybrid',
    price: 'From $48,900',
    range: '500 mi',
    acceleration: '4.5s',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    colors: ['bg-black', 'bg-white', 'bg-gray-400', 'bg-red-700'],
    featured: true
  }
];

const VehicleCard = ({ vehicle }: { vehicle: typeof vehicles[0] }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <Card className="car-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        {vehicle.featured && (
          <Badge className="absolute top-2 right-2 bg-car text-white z-10">
            Featured
          </Badge>
        )}
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-48 md:h-64 object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{vehicle.name}</h3>
            <p className="text-sm text-foreground/70">{vehicle.type}</p>
          </div>
          <p className="font-bold">{vehicle.price}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-car" />
            <span className="text-sm">{vehicle.range} Range</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-car" />
            <span className="text-sm">{vehicle.acceleration} 0-60mph</span>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Available Colors</p>
          <div className="flex gap-2">
            {vehicle.colors.map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full ${color} border ${selectedColor === index ? 'border-car ring-2 ring-car/30' : 'border-gray-300'}`}
                onClick={() => setSelectedColor(index)}
                aria-label={`Select color ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <Button className="w-full btn-car">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedVehicles = () => {
  return (
    <section id="vehicles" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Exceptional <span className="text-car">Vehicles</span></h2>
            <p className="text-lg text-foreground/70 max-w-lg">
              Explore our latest models combining cutting-edge technology with elegant design.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">All Models</Button>
            <Button className="btn-car" size="sm">Compare</Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Models</TabsTrigger>
              <TabsTrigger value="electric">Electric</TabsTrigger>
              <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="electric">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.filter(v => v.type === 'Electric').map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hybrid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.filter(v => v.type === 'Hybrid').map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
