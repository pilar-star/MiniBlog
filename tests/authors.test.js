import {  describe, test, expect, beforeEach, afterAll } from "vitest";
import { request } from "supertest";
import app from "../src/app.js";
import pool from "../src/db/config.js";