import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import PrimaryButton from "../components/PrimaryButton";
import Axios from "../api/axios";

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        // Fetch communities when the component mounts
        const fetchCommunities = async () => {
            try {
                const response = await Axios.get("/communities");
                setCommunities(response.data.communities);
                console.log(response.data.communities);
            } catch (error) {
                console.error(error.response.data);
            }
        };

        fetchCommunities();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communities.filter((item) => item.status === "approved").map(
                    (community) => (
                        <div
                            key={community.id}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold text-primary">
                                {community.name}
                            </h2>
                            <hr className="my-3" />
                            <p className="text-gray-600">
                                {community.description}
                            </p>
                            <div className="flex items-center mt-2">
                                <p className="text-gray-700">
                                    Members : {community.members} | Popularity :{" "}
                                </p>
                                <div className="text-primary">
                                    {[...Array(5)].map((_, index) => (
                                        <AiFillStar
                                            key={index}
                                            className={`h-4 w-4 fill-current inline ${
                                                index < community.popularity
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="p-5">
                                <PrimaryButton
                                    text="Join Community"
                                    onClick={() =>
                                        handleJoinCommunity(community.id)
                                    }
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default CommunityList;
