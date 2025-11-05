import React, { useEffect, useState } from 'react';
import { User, MapPin, Phone, Mail, Plus, Edit2 } from 'lucide-react';
import  NewCommunityButton from '../components/NewCommunityButton';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with mock data
    // Replace this with your actual API endpoint
    setTimeout(() => {
      setUserData({
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phoneNo: "+1 234 567 8900",
        gender: "Female",
        userType: "Normal Citizen",
        address: {
          city: "San Francisco",
          State: "California",
          country: "USA",
          zipcode: "94102"
        },
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      });
      setLoading(false);
    }, 1000);

    //  API call
    // fetch("http://localhost:5050/user/profile")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUserData(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching profile:", error);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Unable to load profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative pb-20">
      {/* Header Section with Profile */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-gray-100 shadow-lg">
                {userData.profileImage ? (
                  <img 
                    src={userData.profileImage} 
                    alt={userData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                <Edit2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Name and Basic Info */}
            <div className="flex-1 pt-2">
              <h1 className="text-2xl font-semibold text-gray-900">{userData.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{userData.userType}</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{userData.address.city}, {userData.address.State}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="p-6 space-y-4">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-700">Contact Information</h2>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">{userData.phoneNo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-700">Address</h2>
          </div>
          <div className="p-5">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 leading-relaxed">
                  {userData.address.city}, {userData.address.State}<br/>
                  {userData.address.country} - {userData.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-700">Personal Information</h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Gender</p>
              <p className="text-sm text-gray-900 mt-1">{userData.gender}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Account Type</p>
              <p className="text-sm text-gray-900 mt-1">{userData.userType}</p>
            </div>
          </div>
         
        </div>
      </div>
      <NewCommunityButton />
    </div>
  );
}

export default Profile;