import {ProfileForm} from "@/app/ui/contact/contact_form";
import StatsLineChart from "@/app/ui/stats/line-chart";

export default function Page() {

    return (
      <div className="flex flex-col md:flex-col gap-4 md:overflow-hidden">
        
        <h1>Stats</h1>
        <StatsLineChart />
        
      </div>
    );
  }
  