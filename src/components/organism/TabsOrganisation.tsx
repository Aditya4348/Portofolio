import { Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import  AboutMe  from "@/data/AboutMe";
import { Link } from "react-router-dom";

export default function TabsOrganisation() {
  
  const Items = AboutMe.organisations;

  return (
    <div className="w-full space-y-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">
            Organizations Experience
          </h2>
          <p className="text-gray-600 mt-1 text-justify">
            "A brief overview of significant roles and contributions in various organizations, showcasing leadership and commitment to driving impactful initiatives."
          </p>
        </div>
      </div>

        {/* Organizations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Items.map((org, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative mx-auto flex items-center justify-center">
              <img
                src={`/public/assets/${org.image || "placeholder.svg"}`}
                alt={org.title}
                className="w-1/2 object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">
                    {org.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {org.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{org.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{org.position}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {org.enter}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link
                    to={`/detail/${org.detail[0].category}/${org.detail[0].id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Details
                  </Link>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
