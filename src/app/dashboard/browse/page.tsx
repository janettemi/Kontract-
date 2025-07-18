'use client';

import { useState } from "react";
import { Box } from "@mui/material";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import JobCard from "@/conponent/JobCard";

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
    showContactButton: true,
  },
];

const BrowseJobs = () => {
  const [role, setRole] = useState("all");
  const [department, setDepartment] = useState("all");
  const [search, setSearch] = useState("");

  const roles = [
    { label: "All", value: "all" },
    { label: "Contracts", value: "contracts" },
    { label: "Services", value: "services" },
  ];

  const departments = [
    { label: "All", value: "all" },
    { label: "Remote", value: "remote" },
    { label: "Lagos", value: "lagos" },
    { label: "Ibadan", value: "ibadan" },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesRole = role === "all" || job.jobTitle.toLowerCase().includes(role);
    const matchesLocation =
      department === "all" ||
      job.location.toLowerCase().includes(department.toLowerCase());

    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 2 }, py: 4, mx: "auto" }}>
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
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          {filteredJobs.map((job) => (
            <Box
              key={job.id}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 12px)", // Two per row with spacing
                },
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 12px)", // Maintain spacing
                },
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
  );
};

export default BrowseJobs;
