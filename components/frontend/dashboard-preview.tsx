import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="bg-white py-16 px-2">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full max-md:w-fit">
          <CardContent className="max-md:px-2">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="Dashboard Preview"
              width={2016}
              height={1210}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
