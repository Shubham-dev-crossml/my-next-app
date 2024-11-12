import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import img from "@/app/public/assets/images/IMAGE.jpg";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-4">
            <AvatarImage src={img.src} alt="Shubham" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-gray-900">Shubham</h1>
          <p className="text-xl text-gray-600">Front-End Developer</p>
        </header>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Date of Birth:</strong> 04th November, 1996
              </p>
              <p>
                <strong>Address:</strong>Sector-26, Panchkula-134116, Haryana
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold">
                  Lovely Professional University
                </h3>
                <p>Bachelor of Technology, ECE</p>
                <p className="text-sm text-gray-600">Graduated: 2020</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">D.A.V School</h3>
                <p>Intermediate School</p>
                <p className="text-sm text-gray-600">Graduated: 2013</p>
              </div>
              <div>
                <h3 className="font-semibold">D.A.V School</h3>
                <p>High School</p>
                <p className="text-sm text-gray-600">Graduated: 2011</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold">Junior Software Programmer</h3>
                <p>Hurix Digital Pvt. Ltd., Pune, Maharastra</p>
                <p className="text-sm text-gray-600">
                  16 Nov, 2021 to 17 Feb, 2023
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">React.js Developer</h3>
                <p>Copan Consultancy Services Pvt. Ltd., Mohali, Punjab</p>
                <p className="text-sm text-gray-600">
                  03 July, 2023 to 24 Oct, 2024
                </p>
              </div>
              <div>
                <h3 className="font-semibold">React.js Developer</h3>
                <p>CrossML Pvt. Ltd., Chandigarh</p>
                <p className="text-sm text-gray-600">04 Nov, 2024 to present</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>
                  Completed an intensive three-month UI development training
                  program at Brain Mentors Pvt. Ltd., gaining hands-on
                  experience in building responsive and interactive user
                  interfaces using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Completed comprehensive training in Front-End Development at
                  Brain Mentors Pvt. Ltd., achieving proficiency in building
                  dynamic and responsive applications with ReactJS, including
                  component architecture, state management, and performance
                  optimization.
                </li>
                <li>
                  Currently enrolled in the Data Structures and Algorithms (DSA)
                  course in Java at Brain Mentors Pvt. Ltd., focusing on
                  mastering core algorithms, data manipulation, and
                  problem-solving techniques in Java.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Git",
                  "Responsive Design",
                  "RESTful APIs",
                  "MUI",
                  "Chakra UI",
                  "Bootstrap",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
