'use client';

import { useState } from "react";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import JobCard from "@/conponent/JobCard";

// Sample saved jobs
const jobs = [
  {
    id: 1,
    postedTime: "2 hours ago",
    title: "Plumbing Work Needed",
    jobTitle: "Plumber",
    description: "Looking for an experienced plumber to fix a leaking pipe.",
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
    description: "Need certified installer for house wiring project.",
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
    postedTime: "1 day ago",
    title: "Install Electrical Wiring",
    jobTitle: "Electrician",
    description: "Need certified installer for house wiring project.",
    priceRange: "$300 - $600",
    rating: 5,
    location: "Lagos",
    dueDate: "June 25, 2025",
    bids: 8,
    showPromotedButton: false,
    showContactButton: true,
  },
  {
    id: 4,
    postedTime: "1 day ago",
    title: "Install Electrical Wiring",
    jobTitle: "Electrician",
    description: "Need certified installer for house wiring project.",
    priceRange: "$300 - $600",
    rating: 5,
    location: "Lagos",
    dueDate: "June 25, 2025",
    bids: 8,
    showPromotedButton: false,
    showContactButton: true,
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Contracts", value: "contracts" },
  { label: "Services", value: "services" },
];

const location = [
  { label: "All", value: "all" },
  { label: "Remote", value: "remote" },
  { label: "Lagos", value: "lagos" },
  { label: "Ibadan", value: "ibadan" },
];

const SavedItems = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [department, setDepartment] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesRole = role === "all" || job.jobTitle.toLowerCase() === role;
    const matchesLocation =
      department === "all" ||
      job.location.toLowerCase().includes(department.toLowerCase());

    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <Box>
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
          placeholder="Search Service"
        />
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <SelectInput
            label="Categories"
            value={role}
            options={categories}
            onChange={setRole}
          />
          <SelectInput
            label="Location"
            value={department}
            options={location}
            onChange={setDepartment}
          />
          <Button
          variant="outlined"
          disabled={filteredJobs.length === 0}
          onClick={() => {
            setSearch("");
            setRole("all");
            setDepartment("all");
          }}
          sx={{
            width: 94,
            height: 44,
            gap: "4px",
            borderWidth: "1px",
            borderRadius: "8px",
            padding: "8px",
            opacity: 1,
            textTransform: "none",
            color: filteredJobs.length === 0 ? "#F2F2F2" : "#FF0000",
            borderColor: filteredJobs.length === 0 ? "#F2F2F2" : "#FF0000",
            "&:hover": {
              borderColor: filteredJobs.length === 0 ? "#F2F2F2" : "#FF0000",
              backgroundColor: filteredJobs.length === 0 ? "transparent" : "rgba(255, 0, 0, 0.08)",
            },
          }}
        >
          Clear all
        </Button>
        </Box>
      </Box>

      {/* Empty State */}
      {filteredJobs.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Image
            src="/image/Group (3).png"
            alt="No Saved Items"
            width={160}
            height={160}
          />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#556882",
              mt: 2,
            }}
          >
            You don’t have any contracts or services saved yet.
          </Typography>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default SavedItems;
