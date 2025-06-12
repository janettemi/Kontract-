"use client";

import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import JobCard from "@/conponent/JobCard";
import BuildSection from "@/conponent/BuildInfo";
import { Box } from "@mui/material";
import { useState } from "react";

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
    id: 4,
    postedTime: "4 days ago",
    title: "Fix Air Conditioning Unit",
    jobTitle: "HVAC Technician",
    description:
      "AC is not cooling properly. Need diagnosis and repair before weekend.",
    priceRange: "$100 - $200",
    rating: 4,
    location: "Port Harcourt",
    dueDate: "June 18, 2025",
    bids: 2,
    showPromotedButton: false,
    showContactButton: true,
  },
  {
    id: 5,
    postedTime: "5 days ago",
    title: "Wall Mount TV Installation",
    jobTitle: "Technician",
    description:
      "Need to mount a 55-inch TV on a concrete wall. Bring your tools.",
    priceRange: "$30 - $70",
    rating: 5,
    location: "Kano",
    dueDate: "June 19, 2025",
    bids: 4,
    showPromotedButton: true,
    showContactButton: false,
  },
  {
    id: 4,
    postedTime: "4 days ago",
    title: "Fix Air Conditioning Unit",
    jobTitle: "HVAC Technician",
    description:
      "AC is not cooling properly. Need diagnosis and repair before weekend.",
    priceRange: "$100 - $200",
    rating: 4,
    location: "Port Harcourt",
    dueDate: "June 18, 2025",
    bids: 2,
    showPromotedButton: false,
    showContactButton: true,
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
      <Box
        sx={{
          px: 4,
          py: 6,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
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

     <Box
  sx={{
    columnCount: 3,
    columnGap: 5, // spacing between columns
    maxWidth: "1200px",
    mx: "auto",
  }}
>
  {jobs.map((job) => (
    <Box
      key={job.id}
      sx={{
        breakInside: "avoid",
        mb: 3,
      }}
    >
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
    </Box>
  ))}
</Box>

      </Box>

      <Box sx={{ mt: 6 }}>
        <BuildSection />
      </Box>
    </>
  );
};

export default BrowseJobs;
