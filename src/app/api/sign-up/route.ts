/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();
  } catch (error) {
    console.error("Error in sign-up route:", error);
    return Response.json(
      { success: false, message: "Failed to sign up." },
      {
        status: 500,
      }
    );
  }
}
