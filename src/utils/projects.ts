export const getProjectCover = (
  project: TProject,
): TProjectImage | undefined =>
  project.gallery.find((image) => image.id === project.coverImageId) ??
  project.gallery[0];
