// Backendless Configuration
const APP_ID = "4A199CBD-443F-46F1-92AD-510866DF18E4";
const API_KEY = "E040786E-A130-438F-8A2A-16267112B9B8";
const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}`;

// Fetch all blog posts
export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/data/BlogPosts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch single post by objectId or slug
export async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(
      `${BASE_URL}/data/BlogPosts?where=slug%3D'${encodeURIComponent(slug)}'`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Create new blog post
export async function createPost(postData) {
  try {
    const response = await fetch(`${BASE_URL}/data/BlogPosts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

// Update blog post
export async function updatePost(objectId, postData) {
  try {
    const response = await fetch(`${BASE_URL}/data/BlogPosts/${objectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
}

// Delete blog post
export async function deletePost(objectId) {
  try {
    const response = await fetch(`${BASE_URL}/data/BlogPosts/${objectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete post");
    }

    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}
