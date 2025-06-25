import { Badge, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function TabsOrganisation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {[
              {
                image: "",
                title: "Student Council",
                description:
                  "Leading technology company specializing in AI-driven solutions and cloud infrastructure. We help businesses transform digitally with cutting-edge technology and innovative approaches.",
                location: "San Francisco, CA",
                position: "Leader",
                enter: "2018",
                tags: ["Technology", "AI", "Cloud"],
                featured: true,
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Karang Taruna",
                description:
                  "Environmental organization dedicated to sustainable practices and climate change awareness. Working towards a greener future through community engagement and innovative solutions.",
                location: "Portland, OR",
                position: "secretary",
                enter: "2020",
                tags: ["Environment", "Sustainability", "Non-Profit"],
                featured: true,
              },
            ].map((org, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
                <div className="relative">
                  <img src={org.image || "/placeholder.svg"} alt={org.title} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-300 mb-2">{org.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{org.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {org.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 cursor-pointer" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
    )
}