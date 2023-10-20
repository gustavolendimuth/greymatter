/* eslint-disable import/prefer-default-export */
import { DocumentDefinition } from 'sanity';
import { StructureResolver } from 'sanity/desk';
import application from 'schemas/documents/application';
import applicationForm from 'schemas/documents/applicationForm';
import author from 'schemas/documents/author';
import blogSettings from 'schemas/documents/blogSettings';
import community from 'schemas/documents/community';
import communityMembers from 'schemas/documents/communityMembers';
import footer from 'schemas/documents/footer';
import hero from 'schemas/documents/hero';
import howWeInvest from 'schemas/documents/howWeInvest';
import intro from 'schemas/documents/intro';
import siteSettings from 'schemas/documents/siteSettings';
import team from 'schemas/documents/team';
import teamMembers from 'schemas/documents/teamMembers';
import whatDoWeOffer from 'schemas/documents/whatDoWeOffer';
import whatWeLookFor from 'schemas/documents/whatWeLookFor';
import whoWeAre from 'schemas/documents/whoWeAre';

const settingsDocs = [siteSettings, blogSettings] as DocumentDefinition[];

const simpleDocs = [
  hero,
  intro,
  whoWeAre,
  whatWeLookFor,
  whatDoWeOffer,
  howWeInvest,
  team,
  community,
  application,
  applicationForm,
  footer,
] as DocumentDefinition[];

export const hiddenOptions = [
  ...settingsDocs.map((doc) => doc.name),
  ...simpleDocs.map((doc) => doc.name),
  teamMembers.name,
  communityMembers.name,
  author.name,
];

const hiddenDocs: string[] = [...hiddenOptions];

export const customStructure = (): StructureResolver => (S) => {
  const defaultListItems = S.documentTypeListItems().filter((listItem) => {
    const id = listItem.getId();
    return id && ![...hiddenDocs].includes(id);
  });

  const simpleStructure = (types: DocumentDefinition[]) =>
    types.map((type) =>
      S.listItem()
        .title(type.title || '')
        .icon(type?.icon)
        .child(
          S.editor()
            .id(type?.name)
            .schemaType(type?.name)
            .documentId(type?.name)
        )
    );

  return S.list()
    .title('Content')
    .items([...simpleStructure(settingsDocs), S.divider(), ...simpleStructure(simpleDocs), ...defaultListItems]);
};
