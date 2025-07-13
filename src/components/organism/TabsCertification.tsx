import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";
import { AboutMe } from "@/data/AboutMe";
import { Link } from "react-router-dom";
import FadeUpHook from "../animations/FadeUpHook";

export default function TabsCertification() {
  const item = AboutMe.certifications;

  return (
    <div className="w-full space-y-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">
            My Certifications
          </h2>
          <p className="text-gray-600 mt-1 text-justify">
            {item.length} professional certifications
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <FadeUpHook>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {item.map((cert) => (
            <Card
              key={cert.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={`/public/assets/${cert.mainImage}`}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Status Badge */}
                <Badge
                  className={`absolute top-3 left-3 ${
                    cert.status === "Active"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  }`}
                >
                  {cert.status}
                </Badge>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Link
                      to={`/detail/${cert.detail[0].category}/${cert.detail[0].id}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md text-sm font-semibold transition-colors duration-300"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <CardContent className="p-5 space-y-4">
                {/* Title and Category */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-xs border-gray-800 text-gray-800"
                  >
                    {cert.field}
                  </Badge>
                </div>

                {/* Issuer */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Dates */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Expires: {cert.expiryDate}
                    </span>
                    {cert.expiryDate !== "Never" && (
                      <span className="text-xs text-green-600 font-medium">
                        Valid
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeUpHook>
    </div>
  );
}
