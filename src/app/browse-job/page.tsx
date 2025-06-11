"use client";

import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import JobCard from "@/conponent/JobCard";
import { Box} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import BuildSection from "@/conponent/BuildInfo";

const jobs = [
  {
    id: 1,
    postedTime: "2 hours ago",
    title: "Plumbing Work Needed",
    jobTitle: "Plumber",
    description:
      "Looking for an experienced plumber to fix a leaking pipe under the kitchen sink. The issue is urgent.",
    priceRange: "$50 - $100",
    rating: 4,
    location: "Abuja",
    dueDate: "June 15, 2025",
    bids: 5,
    showPromotedButton: true,
    showContactButton: true,
  },
  {
    id: 2,
    postedTime: "1 day ago",
    title: "Install Electrical Wiring",
    jobTitle: "Electrician",
    description:
      "Need someone to install wiring in a new house project. Must be certified and follow safety protocols.",
    priceRange: "$300 - $600",
    rating: 5,
    location: "Lagos",
    dueDate: "June 25, 2025",
    bids: 8,
    showPromotedButton: false,
    showContactButton: true,
  },
  {
    id: 3,
    postedTime: "3 days ago",
    title: "Paint a 3-bedroom flat",
    jobTitle: "Painter",
    description:
      "Looking for a painter to paint a 3-bedroom flat in Surulere. Materials will be provided.",
    priceRange: "$150 - $250",
    rating: 3,
    location: "Surulere",
    dueDate: "June 20, 2025",
    bids: 3,
    showPromotedButton: true,
    showContactButton: false,
  },
  {
    id: 3,
    postedTime: "3 days ago",
    title: "Paint a 3-bedroom flat",
    jobTitle: "Painter",
    description:
      "Looking for a painter to paint a 3-bedroom flat in Surulere. Materials will be provided.",
    priceRange: "$150 - $250",
    rating: 3,
    location: "Surulere",
    dueDate: "June 20, 2025",
    bids: 3,
    showPromotedButton: true,
    showContactButton: false,
  },
  {
    id: 3,
    postedTime: "3 days ago",
    title: "Paint a 3-bedroom flat",
    jobTitle: "Painter",
    description:
      "Looking for a painter to paint a 3-bedroom flat in Surulere. Materials will be provided.",
    priceRange: "$150 - $250",
    rating: 3,
    location: "Surulere",
    dueDate: "June 20, 2025",
    bids: 3,
    
    showContactButton: false,
  },
];

const BrowseJobs = () => {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");

  const roles = [
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "User", value: "user" },
  ];

  const departments = [
    { label: "HR", value: "hr" },
    { label: "Engineering", value: "engineering" },
    { label: "Marketing", value: "marketing" },
  ];

  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contractors, jobs..."
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <SelectInput
            label="Categories"
            value={role}
            options={roles}
            onChange={setRole}
          />
          <SelectInput
            label="Location"
            value={department}
            options={departments}
            onChange={setDepartment}
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {jobs.map((job) => (
           <Grid key={job.id} item xs={12} sm={6} md={4}>
            <JobCard
              postedTime={job.postedTime}
              title={job.title}
              jobTitle={job.jobTitle}
              description={job.description}
              priceRange={job.priceRange}
              rating={job.rating}
              location={job.location}
              dueDate={job.dueDate}
              bids={job.bids}
              showPromotedButton={job.showPromotedButton}
              showContactButton={job.showContactButton}
              onButtonClick={() => alert(`Contacting for job: ${job.title}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box>
        <BuildSection />
      </Box>
    </>
  );
};

export default BrowseJobs;
