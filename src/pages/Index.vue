<template>
  <Layout>
    <Conference :conferences="$page.conference.edges" />
    <div class="container">
      <Hero />

      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  conference: allConference {
    edges {
      node {
        name
				location
        thumbnail
				color
				date
        buttons {link, text}
        content
      }
    }
  }
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}


</page-query>

<script>
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import LatestJournals from "@/components/LatestJournals";
import Conference from "@/components/Conference";

export default {
  components: {
    Hero,
    Conference,
    ProjectsGrid,
    LatestJournals
  }
};
</script>
