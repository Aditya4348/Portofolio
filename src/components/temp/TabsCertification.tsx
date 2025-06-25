import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, Building2, Eye } from "lucide-react"

export default function TabsCertification() {
  const certifications = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      issueDate: "March 2024",
      expiryDate: "March 2027",
      status: "Active",
      category: "Cloud Computing",
      image: "../assets/projects/default.jpeg",
      credentialId: "AWS-SAP-2024-001",
      verified: true,
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "January 2024",
      expiryDate: "January 2026",
      status: "Active",
      category: "Development",
      image: "../assets/projects/default.jpeg",
      credentialId: "GCP-PD-2024-002",
      verified: true,
    },
    {
      id: 3,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issueDate: "December 2023",
      expiryDate: "Never",
      status: "Active",
      category: "Cloud Computing",
      image: "../assets/projects/default.jpeg",
      verified: true,
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "November 2023",
      expiryDate: "November 2026",
      status: "Active",
      category: "DevOps",
      image: "../assets/projects/default.jpeg",
      verified: true,
    },
    {
      id: 5,
      title: "Project Management Professional",
      issuer: "Project Management Institute",
      issueDate: "September 2023",
      expiryDate: "September 2026",
      status: "Active",
      category: "Management",
      image: "../assets/projects/default.jpeg",
      verified: true,
    },
  ]

  return (
    <div className="w-full space-y-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">My Certifications</h2>
          <p className="text-gray-600 mt-1">{certifications.length} professional certifications</p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-200"
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Status Badge */}
              <Badge
                className={`absolute top-3 left-3 ${
                  cert.status === "Active" ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {cert.status}
              </Badge>

              {/* Verified Badge */}
              {cert.verified && (
                <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Hover Actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" className="cursor-pointer">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </div>

            {/* Certificate Info */}
            <CardContent className="p-5 space-y-4">
              {/* Title and Category */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-1">{cert.title}</h3>
                <Badge variant="outline" className="text-xs border-gray-800 text-gray-800">
                  {cert.category} 
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
                  <span className="text-gray-500">Expires: {cert.expiryDate}</span>
                  {cert.expiryDate !== "Never" && <span className="text-xs text-green-600 font-medium">Valid</span>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
